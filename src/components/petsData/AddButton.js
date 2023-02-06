import {ReactComponent as AddIcon} from '../../images/svg/add.svg';
import {
  ButtonBasic,
  LinkBasic,
  AddLinkCircle,
  AddLinkBasic,
} from './AddButton.styled';

const Button = ({ onClick, type = 'button', children }) => {
  return <ButtonBasic onClick={onClick} type={type}>{children}</ButtonBasic>;
};

const ButtonLink = ({ onClick, name = '', href = '', children }) => {
  return (
    <LinkBasic onClick={onClick}
      // href={href} name={name}
    >
      {children}
    </LinkBasic>
  );
};
const AddButtonLink = ({ name = '', href = '', children }) => {
  return (
    <AddLinkBasic href={href} name={name}>
      {children}
      <div>
        <AddIcon
          sx={{
            width: 32,
            height: 32,
            color: '#ffffff',
          }}
        />
      </div>
    </AddLinkBasic>
  );
};

const AddButtonCircleLink = ({ name = '', href = '', children }) => {
  return (
    <AddLinkCircle href={href} name={name}>
      <AddIcon
        sx={{
          width: 32,
          height: 32,
          color: '#ffffff',
        }}
      />
      {children}
    </AddLinkCircle>
  );
};

export { ButtonLink, AddButtonLink, AddButtonCircleLink, Button };