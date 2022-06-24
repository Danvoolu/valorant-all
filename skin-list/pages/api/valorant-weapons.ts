export default async function handler(req: any, res: any) {
  const params = { language: "ja-JP" };
  const query = new URLSearchParams(params);

  const response1 = await fetch(`https://valorant-api.com/v1/weapons?${query}`);
  const weapons = await response1.json();
  res.status(200).json({ weapons });

  //   const response = await fetch("https://valorant-api.com/v1/weapons");
  //   const users = await response.json();
  //   res.status(200).json({ users });
}
