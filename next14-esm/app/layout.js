export default async function Layout(props) {
  return (
    <html>
      <body>
        <div className='main w-100'>
          {props.children}
        </div>
      </body>
    </html>
  );
}
