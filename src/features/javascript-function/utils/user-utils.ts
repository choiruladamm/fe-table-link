import { User } from "@/types/user";

export function getYoungestUser(users: User[]): string {
	const minAgeUser = users.reduce((min, curr) =>
		curr.age < min.age ? curr : min,
	);
	return minAgeUser.name;
}

export function getOldestUser(users: User[]): string {
	const maxAgeUser = users.reduce((max, curr) =>
		curr.age > max.age ? curr : max,
	);
	return maxAgeUser.name;
}

export function sortUsersByMinAge(users: User[]): User[] {
	return [...users].sort((a, b) => a.age - b.age);
}

export function sortUsersByMaxAge(users: User[]): User[] {
	return [...users].sort((a, b) => b.age - a.age);
}
