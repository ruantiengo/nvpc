import axios from 'axios'
import Head from 'next/head'
import { Container } from '../components/Container'
import { GeneralInfo } from '../components/GeneralInfo'
import { SearchView } from '../components/SearchView'

export type UserInfoProps = {
    login: string
    avatar_url: string
}
export type Repo = {
    name: string
    html_url: string
    description: string
    updated_at: string
    language: string
}

type HomeProps = {
    userInfo: UserInfoProps
    userRepos: Repo[]
}
const Home = ({ userInfo, userRepos }: HomeProps) => {
  const filterLanguages = [...new Set(userRepos.map(obj => obj.language))].filter(element => element !== null).filter(el => el !== 'HTML')

  return (
      <>
          <Head>
              <title>Ruan Tiengo challenge</title>
              <meta name="description" content="Desafi" />
              <link rel="icon" href="/logo.svg" />
          </Head>
          <Container>
              <SearchView userRepos = {userRepos} filterLanguages={filterLanguages}/>
              <GeneralInfo title={userInfo.login} numberRepos={userRepos.length} filterLanguages={filterLanguages} repos={userRepos} imageUrl={userInfo.avatar_url}/>

          </Container>
      </>
  )
}
export async function getStaticProps () {
  const userInfo = (await axios.get('https://api.github.com/users/ruantiengo')).data
  const userRepos = (await axios.get('https://api.github.com/users/ruantiengo/repos')).data
  // const userInfo = {
  //   login: 'teste',
  //   avatar_url: 'teste'
  // }
  // const userRepos: Repo[] = [{
  //   description: 'teste',
  //   name: 'alfabeto é um teste',
  //   language: 'Javascript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // }, {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Java',
  //   html_url: 'www.google.com',
  //   updated_at: '2017-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'beta é um teste',
  //   language: 'Python',
  //   html_url: 'www.google.com',
  //   updated_at: '2011-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'dario é um teste',
  //   language: 'Typescript',
  //   html_url: 'www.google.com',
  //   updated_at: '2022-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Javascript',
  //   html_url: 'www.google.com',
  //   updated_at: '2019-06-25T22:52:16Z'
  // }, {
  //   description: 'alex',
  //   name: 'isso é um teste',
  //   language: 'Java',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Python',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'bexiga é um teste',
  //   language: 'Typescript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Javascript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // }, {
  //   description: 'teste',
  //   name: 'elefante é um teste',
  //   language: 'Java',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'abcdario é um teste',
  //   language: 'Python',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Typescript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Javascript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // }, {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Java',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Python',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // },
  // {
  //   description: 'teste',
  //   name: 'isso é um teste',
  //   language: 'Typescript',
  //   html_url: 'www.google.com',
  //   updated_at: '2021-06-25T22:52:16Z'
  // }]
  return {
    props: {
      userInfo,
      userRepos
    },

    revalidate: 60 * 60 * 12
  }
}
export default Home
