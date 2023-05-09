const getStudent = () => {
    const data = fetch(`https://api-blue-archive.vercel.app/api/characters`)
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