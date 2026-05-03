function Detail({ title, createdAt, body }){
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-4xl">{title}</h1>
      <p>{createdAt}</p>
      <p className="text-xl">{body}</p>
    </div>
  );
}

export default Detail;