const fetchTodo = async () => {
    const res = await fetch(`http://localhost:3001/api/todos`)

    if (!res) {
        throw new Error('cannot get todo right now')
    }

    return res.json()
}

export default fetchTodo