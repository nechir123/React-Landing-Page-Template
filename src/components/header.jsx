

export const Header = (props) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgb(234 4 4 / 50%), rgb(78 105 239)), 
url(../../public//img/intro-bg.jpg)`,
    backgroundSize: "cover",
  }
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay' style={backgroundStyle}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2  col-xs-12 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Lue lisää
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
