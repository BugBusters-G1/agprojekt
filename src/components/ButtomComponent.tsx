/* -fråga teamt vilka version av react dem använder
-ska vi använda lucide-react för icons?
*/

interface ButtonComponentProps {
    onClick: () => void;
  }
  
  export function ButtonComponent({ onClick }: ButtonComponentProps) {
    return <button onClick={onClick}>➡️</button>; 
  }

