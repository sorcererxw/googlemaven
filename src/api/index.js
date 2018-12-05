import axios from 'axios'

const client = axios.create({
    baseURL: '/api',
    timeout: 100000,
})

export function getMavenPackage() {
    return client.get(`/maven`)
}

export function getGroups() {
    return client.get(`/group`)
}

export function getArtifacts(group) {
    return client.get(`/${group}`)
}

export function getByGroupAndArtifact(group, Artifacts) {
    return client.get(`/${group}/${Artifacts}`)
}
