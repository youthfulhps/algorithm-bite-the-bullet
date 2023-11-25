function solution(s) {
    return s
        .split(' ')
        .map(word => word.trim())
        .map(word => word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : "")
        .join(' ')
}
