import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  //   console.log(error, data, pending);

  return (
    <div>
        <br />
        <br />
        <br />
      <center>
        <h1 >Use Fetch Hook</h1>
        <br />
        {pending ? <h3>Pending, Please Wait !</h3> : null}
        {data && data.products && data.products.length
          ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </center>
    </div>
  );
}
