import Image from 'next/image'

export default function Home({ data }) {

  const dt = new Date()

  const ts = dt.getTime()

  let ts_after = ts + (1000 * 60 * data.current.remainingMins);

  const NextTime = new Date(ts_after)

  let hour = NextTime.getHours();
  let minute = NextTime.getMinutes();

  const nt = hour + '時' + minute + '分'
  return (
    <div>
      <h1>Apex マップデータ</h1>
      <p>今のマップ：{data.current.map}</p>
      <div style={{ position: 'relative', width: '100%', height: '150px' }}>
        <Image src={data.current.asset} layout="fill" objectFit='contain' alt='map_image' />
      </div>
      <p>残り時間：{data.current.remainingMins} 分</p>
      <div>
        <p>次のマップ：{data.next.map}</p>
        <p suppressHydrationWarning>開始時間：{nt}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const url = "https://api.mozambiquehe.re/maprotation?auth=" + process.env.API_KEY
  const res = await fetch(url)
  const data = await res.json();
  console.log(data)
  return { props: { data } };
}