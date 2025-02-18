import {useState, useEffect} from 'react'

import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import PostDetails from '../PostDetails'

import './index.css'

const HomePage = () => {
  const [postData, setPostdata] = useState([])

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPostdata(data)
  }, [])

  const imgedetailsObj = [
    {
      id: 1,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/e0ea/12c8/e73b8a25012b43969565404f2fbb8bed?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IUnYjgFNsua~Mfd9tYrb~h2YffoxTmoxLa0JygsY-jJd3qIJemVCCK9T2jqxamfkQXYqFuRyYWxzrWp5oDaX6UqcmNMYb9R7ZkgELICn-03IQQPTX1HX1K0vL3KjTocF8ikIrgD7IJo9fHC5nA18QjHioAG58DzViHHmlbdapsePIR9rqKqJK~H5F~ireFzpwsJ-yoMNkZlEpajc8qJeDzu9GKHZYemDlDlLpGpKWiZjLrOPovLIG-sijC-29GOGyQJNWaWkzA3kIKmrCJ7CB4NfoqpbLXtOMSLqyjPTWM9hZM27aqmkRyN7JKQFGJecbOXaxssWvf9ra099v9i6bg__',
    },
    {
      id: 2,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/acba/a869/6e00ec6510ab6c3fcc90a5487f5371a0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qnIVuAzABTn0Ekradtl8G4HWqmfa1QH6Iwmj8~6ekp2LcALfXeg-xk1ViFfkg1PHo~P6LzuJWeBVen1uiKdi~kqV9uw4zhoEiRpIt0~N3im1Io5rou2~a1BLYupY8Se165XfY~w8dHNeoEG~PLOTUGoSmDzDqOpf6L2qRYve6is1BJ221wb~RsERvTX7co1lXUn4aoxrP9KRLD0RG3xQ1ET2Sp7VotbSDLBYADvDHAJFchfv2LHvFrJOmSNSAHpDOeAe1Y9XZojLU4Dr2OaUMfDydEpWhbxA7y0AYdXItHLq0v6TOLbnHAVRB6Ltwuk2F~ELo0RhvAfUhmpXxbklAw__',
    },
    {
      id: 3,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/a506/47e3/ebff8fe12b7b1b3713a81928079cbc8d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xr2uuFpPip-7qM7ixzuhHE7oTzYbz9iBJOKTmIp22erbGNvPnObICeUgI5sd23BzStqY6rZpPYYOXZuEtZvuaiYUSYpFsj7s9zLhxVtrACKcut-mVOobQb8iAoqc7mph5QO9bJnqg4A6EoeHNYWm0eP1ImVrYNMNUoCbHa~NDZwmoO2-vcmc9nH7lVFLsqW3nO~n3v~v5kevQDlzbd761YpFl~zqrr4WkA4-nOYeYsretChgDGPYSMPYJwjJ~gsj3OQHFahIzAdlhyj6ZWLYGVChnUia83rt1wF2VrcOnt07YvhKr088beL6mF~oQLx4MsFgHO3M67T9yfmW9nJMWg__',
    },
    {
      id: 4,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/c271/6aa1/38f986c4cdb6190b29d62ef3dda8eca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VyVrCGCRqayq7gG299zDfgbvWV41Ni3yJiikELEznXXarbCINq6QygZxo9ggFI~XpQW3buFmF4olHdHWY9q1-V63iY4mrQhgqsvxWTl5YGFI93dDvBX1MsovjWdL5oxRiGwurJVhvoSTGtjVEqXW80tYC2C6AK89QTrH2Z1wqI3BBr7eD-VqdJusr2DQBjMBBtaE8ux03senc4wlWbzDTvBcNmMsfsj6qnOeDpRmnCd1CBx5~Q1Xlo-yrhmECJwTNzdpnfEbEyaLPgqI5b66k6g3ka~hYyZyakuixaedyYjVASpQGEF~ItLHhlkE00zUssqGh~1exi-hajAz0MvHtA__',
    },
    {
      id: 5,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/80ac/08cf/eed2247caaf43859eafc579fe5722acc?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bd00staSNN433P3Dvn2Eh7mgPelA61cCh52Rt1qnlUe~SGjP9ICgOBNxi6eVDVBxxMuK04NcRTWj36Pevp3g-VuDzD5dgltBDfO6iqsz3-FIDe2dTtAzhewU8kkilmGE0g5grI~fIf7LdgRg8RRSyQq6B2EsZubq9-uX5qztQ0T5Zua8wgNd8o8xntF12u2ws9~IGXcmWIJDu2VGKYeqp-a2C--RzKcEhIqkiKQVkmlKsVNO0ovNsuvfwsNNP5hyBPRncohb~eGzPxqZ3xbLTnZV3UjfRn-sjRemSlJCuN2XoGqSlvDb8mwzqUspmUim3~2gLI6umz0SCYEgZT5HjA__',
    },
    {
      id: 6,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/fd17/74bf/9d9a0fe82a513c3ce6f93e7c4ca8cef2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f81tMR0pNSR-fLwmmcn9P1JPvRJyoxfNe0XfyIYkhBfdTXJFI4UUxnKaoml~X6QKNH9RTsDE9n4yIW~K0sW4dSiufVHAxDRO9L8qLL9C1w6CVqCtdy~TE~q3M1hrKrSa5YBiIALxB8-yj4hJtpLyuv6nOXvk-IhEvsLzqnMN4l1AYgFGW6ukMmxiJtoAOeB3W~pM0bifTyc-pSXVziIAprSyecQ~I4GmY~hdhOGRZkJ0RBDS7xyJcz04R0OGLycHzJDI8xvoMB48JrrR8DdZGoFYxOEbyv9I-Vx7mTgC6m-vAkCdla1ftfFLCC2l2KGO4d0dgL0iFhChCnF-R-RHmQ__',
    },
    {
      id: 7,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/c264/c7f4/a882e4dd6d861a5a4445feee42d9228a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hoo4BBKHOSkdoEh8qUB6PFypcKwptjJ2o52iWfi67IibYOLMOKmxZcO4uRXGxJ38XI~u5FzMBglVK3hTi3GatCQNkEFpGRgb~KUYMEVjba7dl9cMulihkLvPUqdR6mRxLbeEOI16A3eSH-29bisjwemCOghzEcICgMR3YO3WDm2uZp0O1dVV7sykxUTcxtlJPmP3KMc4FFuW8J1Ve7P7vCv5N-0fVBvGUqB~68Oaai40tKtzlqEpkXl42p6XAJwBtfSaILBhLKABHoqjLX4-Cbb6fGtzqaV4zKPtQDYVLIq-mgw8Y3kE9DDN30CttPeOnGOHs4s6ICtc-1zTC79Sbw__',
    },
    {
      id: 8,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/4200/c4cd/ce9fda625388a0b092188de17b2eb174?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=em74e9gDu8q2R~6ZygOv9pAGG7Rl7qaUjW2e33Tlq31TeFevky23a3XejIy7Z9Q2iGf1ldhak9FDf2wANw16G~V1tbA34NoOpoa~3y0SQkjb0-VMJ1z7lCNQ0ePciKhTh5doEK9o1I-ntKWBU4hdBjYVFFV0HsSEzP4FnNODjiBzgZ5wM6UnON5ehUCf16h8jdoSmoAZ506x-Y2oaJlE9lLDJo~7EDpWCcLshx9KPYs2SMiG-qVCJ6W3u8feHD0jOgtQfK-ccm6scVMdUTaDw7wS~FStjC1JB4rPu4qZ0mW42C0QWyBJbkXijywzcYctLqkK1biPsLUPnr9p1P~6Fg__',
    },
    {
      id: 9,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/b1c2/c420/12771f8c1332a158a69891eca8353784?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S0HVEpbhfo~yzjdxJGygpvywwIFFDxyTdimkaKoYMz5Qgf2t5ea3bgwTmwxja0hUcaLVK7tqFBHe-68D6Xnb891pH724o2YyJOeoP0pLFn0kOfuHSaSbRDgld3RWSLgWqicUC0AMJ8hfwuJgpo7BYHvbV00Xsqgb3A-o73Dc81e64ywwipNqS4HAwfLCEArLaWi-s42TLu8IAWKolW2Eww5ipBduw~jiPSDoP47OKFytoZ0MPqHl2rdBsHC1~lThroGFAKIAB0If8VJnP9C1dGmSVLhjzYu8Tf5chQdEH3tPPCqVDHtVwM92Soor0QExcWzl13mTWS-2Zhrjhij8og__',
    },
  ]

  const updateddata = postData
    .filter(each => each.id < 10)
    .map(each => {
      const matchedImage = imgedetailsObj.find(img => img.id === each.id)
      return {...each, imgUrl: matchedImage ? matchedImage.imgUrl : ''}
    })

  return (
    <>
      <div>
        <header className="head-container">
          <div className="header-content-container">
            <nav className="nav-container">
              <h1 className="nav-heading">
                <span className="Inspiration-heading">Inspiration by </span>
                trazler
              </h1>
              <ul className="list-container">
                <li className="list-item">DSTINATION</li>
                <li className="list-item">FOOD</li>
                <li className="list-item">WELL BEING</li>
                <li className="list-item">SPORT</li>
                <li className="list-item">FAMILY</li>
                <li className="list-item">LIFESTYLE</li>
              </ul>
              <div className="search-container">
                <FaSearch style={{color: '#ffffff'}} />
                <input
                  placeholder="GET YOUR 120& CHIRISTMAS GIFT"
                  className="search-input"
                  type="search"
                  style={{
                    color: '#ffffff',
                    fontSize: '10px',
                    padding: '10px',
                  }}
                />
              </div>
            </nav>

            <div className="content-container">
              <div className="context-container">
                <h1 className="context-heading">
                  INSPIRATION FOR TRAVEL BY REAL PEOPLE
                </h1>
                <p className="context-paragraph">Book smart, travel simple</p>
                <div className="button-container">
                  <button>Start planning yuor trip</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          <div className="post-content-container">
            <div className="socialmedia-container">
              <div className="icon-para-container">
                <FaFacebookF className="icon-style" />
                <p className="icon-para-style">3.7M</p>
              </div>
              <div className="icon-para-container">
                <FaInstagram className="icon-style" />
                <p className="icon-para-style">2.4M</p>
              </div>

              <div className="icon-para-container">
                <FaTwitter className="icon-style" />
                <p className="icon-para-style">3.7M</p>
              </div>

              <div className="icon-para-container">
                <FaYoutube className="icon-style" />
                <p className="icon-para-style">2.4M</p>
              </div>
            </div>

            <div className="blog-post-container">
              {updateddata.map(each => (
                <PostDetails
                  key={each.id}
                  title={each.title}
                  description={each.body}
                  imageUrl={each.imgUrl}
                  id={each.id}
                />
              ))}
            </div>
            <div className="button-coontainer">
              <button className="load-more-button">Load More</button>
            </div>

            <div className="bottom-travel-container">
              <div className="travel-shadow-container">
                <div className="travel-container-content">
                  <p className="travel-style">Travel</p>
                  <h1 className="heading-style">
                    Richird Norton photorealistic rendering as real photos
                  </h1>
                  <p className="para-style">
                    Progressively incentivize cooperative systems through
                    technically sound functionalities. The credibly productivate
                    seamless data.
                  </p>
                  <button className="travel-button">
                    Start planning your trip{' '}
                  </button>
                </div>
              </div>
            </div>

            <div className="destination-container">
              <h1 className="top-destination-style">Top Destinations</h1>
              <p className="destination-para-style">
                Tick one more destination off of your bucket list with one of
                our most popular vacations in 2022
              </p>
            </div>

            <div className="destination-container-list">
              <div className="destiantion-image-contianer1">
                <div className="travel-shadow-container">
                  <h1 className="dominican-head-style">Dominican Republic</h1>
                </div>
              </div>
              <div className="destiantion-image-contianer2">
                <div className="travel-shadow-container">
                  <h1 className="dominican-head-style">Maecenas Tincidunt</h1>
                </div>
              </div>
              <div className="destiantion-image-contianer3">
                <div className="travel-shadow-container">
                  <h1 className="dominican-head-style">Dominican Republic</h1>
                </div>
              </div>
              <div className="destiantion-image-contianer4">
                <div className="travel-shadow-container">
                  <h1 className="dominican-head-style">Dominican Republic</h1>
                </div>
              </div>{' '}
              <div className="destiantion-image-contianer5">
                <h1 className="dominican-head-style">Dominican Republic</h1>
              </div>
            </div>

            <div>
              <nav className="bottom-nav-container">
                <div className="nav-list">
                  <li
                    className="bottom-nav-list-item"
                    style={{textDecoration: 'underline'}}
                  >
                    Category name
                  </li>
                  <li className="bottom-nav-list-item">Category name</li>
                  <li className="bottom-nav-list-item">Category name</li>
                  <li className="bottom-nav-list-item">Category name</li>
                  <li className="bottom-nav-list-item">Category name</li>
                </div>
              </nav>
              <div className="bottom-portion-container">
                <div className="bottom-nav-content-container">
                  <div className="sub-container">
                    <img
                      className="road-image"
                      src="https://s3-alpha-sig.figma.com/img/106d/4f6c/9ccec87e0dce6e143ad30d966b349b0a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dyFnbAVV2ncrNHAnvFikEtDURdPknVWjJPB8PiLlB5YxuFTFTi41UdbxrOx8eMOQpS02TGwj~LyURXYCFxeFLufiUFfGmFpSgVzgS569PcHWQO-dEOHH3PhX2lCaRK05xf3IW~mC1DsyXFslMoMyzLrOPNIqyF3hMzg~8olzD~6~xGeEI5s-IjoOr6UreK1HstMmDLGflRiRCXChhELhXoc3JjTZM2RTDz5yu1S8w-jvhVxj2v57KKMI6ujlSN80I4ifApofDJTy12opMRkZaPGpIPk~I4Das1v1p~4LEmYnrfZmz4sDTiNi~z6l6E6XMEOEz7IY6Hyj3uszBgmDdg__"
                    />
                    <p className="month-ago-para-style">1 Month Ago</p>
                    <p className="description-para">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </p>
                    <p className="month-ago-para-style">
                      lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                      eleifend sed ex. Donec quis magna sed felis elementum
                      blandit nec quis sem. Maecen.
                    </p>
                    <p className="viewpost-link">View Post</p>
                  </div>
                  <div className="Category-main-container">
                    <div className="Category-image-content-container">
                      <img
                        className="Category-image"
                        src="https://s3-alpha-sig.figma.com/img/9522/1d62/eabfc01a23dbf720236f9bcc1aea4161?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sL5OipZwI8Lm0ARj2pJAVd9AxR-JMYlICijbsS3uPfKOPpSZhIiSSxCRPLC4ZIe-tx3IXmlcdCN7Ny3~LIjo~L08QP~2CKfg-UczDHnLAHi0e4Y16YX7uAKvBBzz8L5XMCtaFoD5qS5C8JbZOFkRZYGcFwmm7NlBzzQHwscyc2VkNNuBfZy2DLnQi4Wt6oESUlRgVsYQm6HAeo3nO6nrbaaxoclYlh2~rqbS1nmzfQMMsBJos6W~oC7MENcuR2ohbIfv2NcMuvvHYzfhqOEeC6cnJgj3J3PN-i62mkGFsPkIN~o5M7GhOKCuvqqbqAzI0NNDWfpQjmE7N-dp1c0f1A__"
                      />
                      <div className="para-container">
                        <p className="description-para">
                          Akame Ga Kill: Season finale
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                    <div className="Category-image-content-container">
                      <img
                        className="Category-image"
                        src="https://s3-alpha-sig.figma.com/img/bf1c/454a/07b44933fe080e986551bc68e44ac23c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eZCuKGJ1diRMEH89RQfD~EfxoQ-K0n1QilsD5-C3Fdol4fxI0ddFFRHSkuEzTHO-eKzHi-T-syJQKmmdsr8qoX9663PsrqqwdZj5K4nSTNcARVFqLnFo17-AiuazmS30-RFCorWNHOXN~kvlfHcfpGbog57p9p~1xooGJrrQljE1xExWIwM6ZSPXwWPZIpFqGUfjafzxPmgNWl0R5YlRW~r89NunGAVGD8vwnSfLOlX3rjnYUxiW10fGYfGi3mAvfxF2sNpGWmprW9ZOTXxYsN5puNoBrgyqb8fotfsPWsnI7AgnG8lJ3mdX0HjJn4WPo8lK7xW4Bl8vNYwnBdFt~g__"
                      />
                      <div className="para-container">
                        <p className="description-para">
                          Naruto Uzumaki: Hidden Village
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                    <div className="Category-image-content-container">
                      <img
                        className="Category-image"
                        src="https://s3-alpha-sig.figma.com/img/7971/20bb/158ded7ce6de511e68a1918d18d61629?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DyAh8tTHN8lSIZu1cLtCzZQSPbmTkjqvPbkb1-1Yh7kapJZ4LazGKSd6Hfco2ycLh~dW5dggoRmcEHzAke6BgU1Bm5v84y5eXMr-wsviu9kv6h4ytWJORDItPP5AL8W5VMeBReAU0KPz9~B5vnW6SDU2PPhFhqgAjA7zlEK2jcvkVuq5mv6bN334SliRHz4~qvGdctnmtm8MhqcAZ1PUyLRfE21Pirl9FED1hhXWn4Nmrj4bBzp~-mFqbgjWrahWviL4AKcyTELRtnWW66XcGmveQMGhyjEn-I8EutLsM7Y2OL1YzyWDLOC5bH-iDCpxC~9wNTjZ7lFr9ZaXiSefTg__"
                      />
                      <div className="para-container">
                        <p className="description-para">
                          Love juice Season Priemere
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                    <div className="Category-image-content-container">
                      <img
                        className="Category-image"
                        src="https://s3-alpha-sig.figma.com/img/9fb8/2d55/f912a8c16328b018783a0ed024601efb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tl2F64ViLtPRuyQ2ms9QLeKN1UabTw9RkXVr1UnjiPJdm2IoFWZSDsV0wz8gfIVNgFRzXhFDNGnSWGuyBIWoZyl~aMMsqKDeGgncoCl6JOyOy64HzoU7~vp0OqIslraMyrNVr72uPIssLyptFxUP5B0VTfauDvF7xZpyYyKAOt0g8BWdyi457U02kyhuyaxpeNRRYKf8~OsqyiJyZu4bFEZhBTU5IBp~owKJUL8gwlCxfS~DQjSRhPtP9OoQHOB9U7m5QtBG5psv5Bv-PBQ5TwvoTt-PQCiNCd3-FsIMyfSJuW07bEuErjxMvtzL9bbwfW2OfFE4MQlDLmk00ljSxQ__"
                      />
                      <div className="para-container">
                        <p className="description-para">
                          Love juice Season Priemere
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manga-reads-container">
                  <h1 className="description-para">Manga Reads</h1>
                  <div className="whole-container">
                    <div className="manga-reads-image-content-container">
                      <img
                        className="manga-reads-image"
                        src="https://s3-alpha-sig.figma.com/img/4164/a750/cfcb1334b2f7a8ebaed72c97f2406b2d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iv9V3~6AmwMHN4wetl0bSx0Fo-9qpeCV-Hby-I851ueRlKRqVMAHe2upaxNTXTPHjOCw6R38EuGQ97YlRgYdDqe9W~CQvADeH3mSsXCjv4y~FCX~hJKXkc4ezgcA6LTiOAngk0394pXvDLDX94ofGXrH0oNeEuGtXRvVGpVEPFflcuSSTlaRmGzb6S7a90d6fk2JxwIsuiWqHuLenffWT8iOj0Z6lQF1wA5S63P2i2Vupd13-bx1v0Zk4Er43zamlwSoXId~oDmwBz4i1ziTYvypof4Lq7msBBI7tyg1tRpESEA005ZIMKt0dKAkshegGcK8AAU1F9aEcF98PGSHrQ__"
                      />
                      <div className="para-container-change">
                        <p
                          className="description-para"
                          style={{width: '200px'}}
                        >
                          Tick one more destination off of your bucket list with
                          one of our most popular vacations in 2022
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                    <div className="manga-reads-image-content-container">
                      <img
                        className="manga-reads-image"
                        src="https://s3-alpha-sig.figma.com/img/8c94/105a/c63266cf275e8e6fa49be95c3518b627?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mGjWNRotZih0Ok2Kq8F3WHudg2M79onXzSAuVQvFCkZKvaQ-v-xwH-PgQlTUSDpSytuGCsNkDTViaoyPteszuWYIC6IqcVyNBdOi-kOANvS~Jy-I8kr45u1HW7a-UaAcm-CSPNw8HcNTdlpoPdyNSbfo1uKMmSNEEg3Xt2H5N27rBS49AcLnrkgW~WiZqK8T8t6OaW9V3pExPL9I9QirpMvHWbfOf2bXFNMZciQSe8L039WCmU7sWMHbM8HGtRWJ4hyekNl-yOZw1i0QXsdei-OsypWLydpCV-gfNawu6-e2CcFjVWrv3C0yqCVI5sWLvW7oNuf1Xnlw61jiopRMgw__"
                      />
                      <div className="para-container-change">
                        <p
                          className="description-para"
                          style={{width: '200px'}}
                        >
                          Tick one more destination off of your bucket list with
                          one of our most popular vacations in 2022
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>

                    <div className="manga-reads-image-content-container">
                      <img
                        className="manga-reads-image"
                        src="https://s3-alpha-sig.figma.com/img/1caf/e09b/5c1b09b687c1359ee723ec7c0b0ec5b4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=riToZwwEgUaGUgk6xTV-ta-j11cypGa~qVldT4xQoe7CgXtwIRY5Af47cCVN1UI~PSFW5V1ThLLoFFM5fmntknWugbQNN1w3PQ1zEY9UsnPD0ftL58pjJ~Z9XhOUw81QNun-HMxHwpTxrViGKN72vOktBAXl3EvcEFJst4bT1Xu-KweZ~XBNQGmw0JnT-xHaFWspKu51uRGYzE6K4bMW1Fmzbc51Diaoyk1vPyh3ygn~43HIXMTpRIgSE9solMhImktALvGg28N-bplOw5~BxQ0ZeKxw10FYpQPsQzjy8167Caqict1GAc7A1NXyGIqA-oMNDSJvEX2USBppKB~rlA__"
                      />
                      <div className="para-container-change">
                        <p
                          className="description-para"
                          style={{width: '200px'}}
                        >
                          Tick one more destination off of your bucket list with
                          one of our most popular vacations in 2022
                        </p>
                        <p className="month-ago-para-style">21 March 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-section">sd</footer>
      </div>
    </>
  )
}
export default HomePage
