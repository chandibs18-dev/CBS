export {};


type GreetProps = {
    messageCount: number;
    isLogged: boolean;
};

// Type with age
type GreetProp = {
    age: number;
};
interface StudentProps {
    name: string;
    age: number;
}

// Interface merge: add email
interface StudentProps {
    email: string;
}
