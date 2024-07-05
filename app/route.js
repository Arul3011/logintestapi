import data from "./data/data";

export function GET() {
  return new Response(JSON.stringify({ data }));
}

export async function POST(response) {
  const resdata = await response.json();
  let valid = false;
  if (resdata) {
    data.map((val) => {
      if (
        (val.name === resdata.name || val.email === resdata.email) &&
        val.password === resdata.password
      ) {
        valid = true;
      }
    });
  }
  return new Response(JSON.stringify({ response: valid }));
}
