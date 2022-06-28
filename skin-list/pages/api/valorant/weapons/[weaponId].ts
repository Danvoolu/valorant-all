export default async function handler(req: any, res: any) {
  const params = { language: "ja-JP" };
  const query = new URLSearchParams(params);
  const weaponUuid = req.query.weaponId as string;

  const response1 = await fetch(
    `https://valorant-api.com/v1/weapons/${weaponUuid}?${query}`
  );
  const weapons = await response1.json();
  res.status(200).json({ weapons });
}
