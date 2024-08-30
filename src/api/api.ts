const serverUrl = 'https://api.genderize.io';

export async function fetchGenderByName(name: string) {
  const url = `${serverUrl}?name=${name}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return { gender: data.gender, status: true };
  } catch (error) {
    return { status: false };
  }
}
