const getStudent = page => {
    const data = fetch(`https://api-blue-archive.vercel.app/api/characters?page=${page}&perPage=20`)
        .then(res => res.json())
        .then(res => res.data)
        .catch(() => false);
    return data;
}

const getStudentByName = nama => {
    const data = fetch(`https://api-blue-archive.vercel.app/api/characters/students?name=${nama}`)
        .then(res => res.json())
        .then(res => res.data)
        .catch(() => false);
    return data;
}

module.exports = {
    getStudent,
    getStudentByName
}