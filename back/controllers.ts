import { NextFunction, Request, Response } from 'express'
const { exec, execFile } = require('child_process')
const reposPath = (process.env.NODE_ENV === 'test') ? '../test_repos' : process.argv[2] || '../test_repos'

module.exports = {
  get: {
    listRepos (req: Request, res: Response, next: NextFunction) {
      exec(`bash ${__dirname}/scripts/listRepos.sh`, {
        cwd: reposPath
      }, (err: Error, out: string) => { 
        if (err) {
          next(err)
        } else {
          res.json(out.slice(0, -1).split('\n'))
        }
      })
    },
    listCommits (req: Request, res: Response, next: NextFunction) {
      const { repositoryId, commitHash } = req.params
      exec(`git log ${commitHash} --pretty="%H %ct"`, {
        cwd: `${reposPath}/${repositoryId}`
      }, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          const commits = out.slice(0, -1).split('\n').map(x => {
            const [commitHash, date] = x.split(' ')
            return {
              commitHash,
              date
            }
          })
          res.json(commits)
        }
      })
    },
    diff (req: Request, res: Response, next: NextFunction) {
      const { repositoryId, commitHash } = req.params
      exec(`git show --pretty="format:%b" ${commitHash}`, {
        cwd: `${reposPath}/${repositoryId}`
      }, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          res.json({ diff: out })
        }
      })
    },
    ls (req: Request, res: Response, next: NextFunction) {
      const { repositoryId } = req.params
      exec('git ls-tree master --name-only', {
        cwd: `${reposPath}/${repositoryId}`
      }, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          res.json(out.slice(0, -1).split('\n'))
        }
      })
    },
    tree (req: Request, res: Response, next: NextFunction) {
      const { repositoryId, commitHash, path = '' } = req.params
      exec(`git ls-tree ${commitHash}:${path} | while read filename; do echo "$(git log -1 --format="%h|%s|%cn|%cr|" -- $(filename)) $filename"; done`, {
      // exec(`git ls-tree ${commitHash}:${path}`, {
        cwd: `${reposPath}/${repositoryId}/`
      }, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          // console.log(out)
          if (out) {
            const files = out.slice(0, -1).split('\n').map(x => {
              const [lastCommit, commitMessage, committer, fileUpdated, rest] = x.split('|')
              // console.log(rest)
              const [type, name] = rest.split('\t')
              return { fileType: type.split(' ')[2], name, lastCommit, commitMessage, committer, fileUpdated }
            })
            // const files = out.slice(0, -1).split('\n').map(x => {
            //   return { type: x.split('\t')[0].split(' ')[1], name: x.split('\t')[1] }
            // })
            res.json(files)
          } else {
            res.json([])
          }
        }
      })
    },
    blob (req: Request, res: Response, next: NextFunction) {
      const { repositoryId, commitHash } = req.params
      const pathToFile = req.params['0']
      const log = execFile('git', ['show', `${commitHash}:${pathToFile}`], {
        cwd: `${reposPath}/${repositoryId}`
      })
      log.stdout.on('data', (data : string) => res.send({ data: data })) // не успела доделать :(
      log.on('close', (code : string) => console.log('closed'))
    }
  },
  delete: {
    deleteRepo (req: Request, res: Response, next: NextFunction) {
      const { repositoryId } = req.params
      exec(`rm -rf ${reposPath}/${repositoryId}`, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          res.json({ message: 'success' })
        }
      })
    }
  },
  post: {
    downloadRepo (req: Request, res: Response, next: NextFunction) {
      const { repositoryId } = req.params
      const { url } = req.body
      console.log(url)
      console.log('download started')
      exec(`git clone ${url} ${repositoryId}`, {
        cwd: `${reposPath}`
      }, (err: Error, out: string) => {
        if (err) {
          next(err)
        } else {
          console.log('success')
          res.json({ message: 'success' })
        }
      })
    }
  }
}
