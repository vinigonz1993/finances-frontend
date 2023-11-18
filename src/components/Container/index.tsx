import styled from 'styled-components';
import Theme from '../../common/Theme';

const Container = styled.div`
    top: 0;
    position: fixed;
    z-index: -1;
    left: 260px;
    width: calc(100% - 260px);
    height: 100%;
    background: #e6fcfb;
    padding-left: 1em;
    overflow: hidden;
    border-left: 4px solid ${Theme.dark};
`;

const InnerContainer = styled.div`
    padding: 1em;
`;

export default Container;
export { InnerContainer };
