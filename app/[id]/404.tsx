


export default  function Page404(ctx: { params: { id: string } }) {
    return (
      <div className="min-h-screen hero bg-base-200">
    <div className="text-center hero-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="py-6">link <pre>{ctx.params.id}</pre> does not exist</p>
        <a className="btn btn-primary" href="/">Go back</a>
      </div>
    </div>
  </div>
    )
  }
