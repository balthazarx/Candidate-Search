// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    login: string;
    location: string;
    avatar_url: string;
    email: string | null;
    html_url: string;
    company: string | null;
    bio: string | null;
}

export type { Candidate };