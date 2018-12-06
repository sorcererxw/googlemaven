import axios from 'axios'

const client = axios.create({
    baseURL: '/api',
    timeout: 100000,
})

export function getPackageList() {
    return client.get('/package')
}

export function getFullGroup() {
    return client.get(`/group?full=true`)
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
