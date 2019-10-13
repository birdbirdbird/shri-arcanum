import  { describe, it } from 'mocha'
const { expect } = require('chai')
const agent = require('supertest')
const app = agent(require('../index'))

describe('Test', () => {
  it('Скачивание репозитория /api/repos/:repositoryId)?', async () => {
    const repositoryId = 'repo'
    const res = await app.post(`/api/repos/${repositoryId}`).send({ url: 'https://github.com/grayghostvisuals/practice-git'})
    expect(res.status).to.equal(200)
  })

  it('Список репозиториев /api/repos ', async () => {
    const res = await app.get('/api/repos')
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
    expect(res.body.includes('repo')).to.equal(true)
  })

  it('Список коммитов /api/repos/:repositoryId/commits/:commitHash', async () => {
    const repositoryId = 'repo'
    const commitHash = 'master'
    const res = await app.get(`/api/repos/${repositoryId}/commits/${commitHash}`)
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
  })

  it('Diff коммита /api/repos/:repositoryId/commits/:commitHash/diff', async () => {
    const repositoryId = 'repo'
    const commitHash = 'master'
    const res = await app.get(`/api/repos/${repositoryId}/commits/${commitHash}/diff`)
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('object')
    expect(res.body.diff).to.equal('cleaned\n')
  })

  it('Содержимое репозитория /api/repos/:repositoryId', async () => {
    const repositoryId = 'repo'
    const res = await app.get(`/api/repos/${repositoryId}`)
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
    expect(res.body).to.eql(['.practy.js.swo', 'README.md', 'branch1502', 'norajs', 'practice-git'])
  })

  it('Содержимое репозитория по пути /api/repos/:repositoryId/tree/:commitHash?/:path([^/]*)?', async () => {
    const repositoryId = 'repo'
    const commitHash = 'master'
    const path = 'norajs'
    const res = await app.get(`/api/repos/${repositoryId}/tree/${commitHash}/${path}`)
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
  })

  it('Содержимое файла /api/repos/:repositoryId/blob/:commitHash/*)?', async () => {
    const repositoryId = 'repo'
    const commitHash = 'master'
    const path = 'norajs/readme.txt'
    const res = await app.get(`/api/repos/${repositoryId}/blob/${commitHash}/${path}`)
    expect(res.status).to.equal(200)
    expect(res.body.data).to.equal('Thanks yo for the practice project :) Gonna mess around here a little.\n\nNora\nHello\n')
  })

  it('Удаление репозитория /api/repos/:repositoryId', async () => {
    const repositoryId = 'repo'
    const res = await app.delete(`/api/repos/${repositoryId}`)
    expect(res.status).to.equal(200)
    expect(res.body.message).to.equal('success')
  })
})
