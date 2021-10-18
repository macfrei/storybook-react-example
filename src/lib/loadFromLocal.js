export default function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  try {
    const data = JSON.parse(jsonString)
    return data
  } catch (error) {
    console.error(error)
  }
}
