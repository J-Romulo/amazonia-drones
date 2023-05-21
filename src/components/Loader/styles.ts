import styled from "styled-components"
import Loader from "react-spinners/ClipLoader"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Spinner = styled(Loader).attrs(props => (
  {
    color: props.color ? props.color : '#FFF',
    size: props.size ? props.size : 50,
    loading: props.loading,
  }
))`
`