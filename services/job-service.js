import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseAdminUrl = `${publicRuntimeConfig.apiUrl}/admin/jobs`;
const basePublicUrl = `${publicRuntimeConfig.apiUrl}/jobs`;

export const jobService = {
    create,
    getAll,
    getAllPublic,
    getById,
    getByIdPublic,
    update,
    publish,
    unpublish,
    postulate,
    delete: _delete
};


function create(job) {
    return fetchWrapper.post(`${baseAdminUrl}`, job);
}

function getAll() {
    return fetchWrapper.get(baseAdminUrl);
}

function getAllPublic() {
    return fetchWrapper.get(basePublicUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseAdminUrl}/${id}`);
}

function getByIdPublic(id) {
    return fetchWrapper.get(`${basePublicUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseAdminUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseAdminUrl}/${id}`);
}

function publish(id) {
    return fetchWrapper.put(`${baseAdminUrl}/${id}/publish`);
}

function unpublish(id) {
    return fetchWrapper.put(`${baseAdminUrl}/${id}/unpublish`);
}

function postulate(id, params) {
    return fetchWrapper.postMultipart(`${basePublicUrl}/${id}/postulate`, params);
}