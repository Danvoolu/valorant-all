import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Index = () => {
  const router = useRouter();
  const { weapon_id } = router.query;
  const { data, error } = useSWR(`/api/valorant/weapons/${weapon_id}`, fetcher);

  // パスパラメータから値を取得
  console.log(data);
  return <div>{weapon_id}</div>;
};

export default Index;
