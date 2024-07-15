const BASE_URL = 'https://nesine-case-study.onrender.com';

export async function fetchMatches() {
  const response = await fetch(`${BASE_URL}/bets`);
  if (!response.ok) {
    throw new Error('Failed to fetch matches');
  }
  const data = await response.json();
  return data;
}
