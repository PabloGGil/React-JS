export async function fetchData(recurso) {
    const res = await fetch(`/${recurso}.json`);
    if (!res.ok) throw new Error(`No se pudo cargar ${recurso}`);
    return res.json();
}