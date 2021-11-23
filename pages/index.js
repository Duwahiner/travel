import { Head, WrapperContainer } from '../util/template'
import ContainerForm from '../container/ContainerForm'

export default function Home () {
  return (
    <WrapperContainer width={1}>
      <Head>
        <title>
          Bienvenido a Travel
        </title>
      </Head>

      <ContainerForm />
    </WrapperContainer>
  )
}
