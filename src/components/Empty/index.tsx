import styled from 'styled-components'
import empty from '../../assets/images/illustration-empty.svg'
const Conatiner =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:0  30%;
    gap: 15px;
    p{
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
    }
    @media (max-width:768px) {
        padding:unset;
    }
`
export const Empty = () => {
  return (
    <Conatiner>
            <div>
            <img src={empty} alt="" />
          </div>
          <h1>Let’s get you started</h1>
          <p className="empty-text">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        
     
    </Conatiner>
  )
}
