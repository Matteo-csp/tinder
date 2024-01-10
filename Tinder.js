// app tinder features

// ajouter au moins 10 profils
const profiles = [];
const profilesToAdd = [
    {
        name: "Alicia",
        email: "alicia@gmail.com",
        gender: "Female",
        genderTarget: "Male",
        matches: [],
        banned: false,
        age: 22,
        bio: "I love hiking",
        preferences: ["reading", "sushi", "traveling"],
        score: 2
    },
    {
        name: "Bob",
        email: "bob@gmail.com",
        gender: "Male",
        genderTarget: "Female",
        matches: [],
        banned: false,
        age: 25,
        bio: "Music is my passion",
        preferences: ["music", "burgers", "movies"],
        score: 3
    },
    {
        name: "Emma",
        email: "emma@gmail.com",
        gender: "Female",
        genderTarget: "Male",
        matches: [],
        banned: false,
        age: 20,
        bio: "Art lover",
        preferences: ["art", "coffee", "beach"],
        score: 1
    },
    {
        name: "Charlie",
        email: "charlie@gmail.com",
        gender: "Male",
        genderTarget: "Female",
        matches: [],
        banned: false,
        age: 28,
        bio: "Fitness enthusiast",
        preferences: ["fitness", "healthy food", "adventures"],
        score: 4
    },
    {
        name: "Grace",
        email: "grace@gmail.com",
        gender: "Female",
        genderTarget: "Male",
        matches: [],
        banned: false,
        age: 24,
        bio: "Bookworm",
        preferences: ["reading", "tea", "nature"],
        score: 2
    },
    {
        name: "Dani",
        email: "dani@gmail.com",
        gender: "Male",
        genderTarget: "Female",
        matches: [],
        banned: false,
        age: 30,
        bio: "Tech geek",
        preferences: ["technology", "pizza", "traveling"],
        score: 3
    },
    {
        name: "Sophia",
        email: "sophia@gmail.com",
        gender: "Female",
        genderTarget: "Male",
        matches: [],
        banned: false,
        age: 26,
        bio: "Foodie",
        preferences: ["food festivals", "cooking", "movies"],
        score: 1
    },
    {
        name: "Olivier",
        email: "olivier@gmail.com",
        gender: "Male",
        genderTarget: "Female",
        matches: [],
        banned: false,
        age: 27,
        bio: "Adventure seeker",
        preferences: ["hiking", "pizza", "traveling"],
        score: 4
    },
    {
        name: "Emma",
        email: "emma@gmail.com",
        gender: "Female",
        genderTarget: "Male",
        matches: [],
        banned: false,
        age: 23,
        bio: "Animal lover",
        preferences: ["animals", "coffee", "beach"],
        score: 2
    },
    {
        name: "Liam",
        email: "liam@gmail.com",
        gender: "Male",
        genderTarget: "Female",
        matches: [],
        banned: false,
        age: 29,
        bio: "Music producer",
        preferences: ["music", "sushi", "concerts"],
        score: 3
    },
];

// Ajouter les profils à la liste principale
profiles.push(...profilesToAdd);

// Un profile avec un email banni ne peut pas être ajouté
function addProfile(profile) {
    if (!profile.banned) {
        profiles.push(profile);
    } else {
        console.log("Profile with a banned email cannot be added.");
    }
}

function removeProfile(email) {
    const index = profiles.findIndex(profile => profile.email === email);
    if (index !== -1) {
        profiles.splice(index, 1);
    }
}

/**
 * Afficher uniquement les profils qui n'ont pas été bannis,
 * Afficher uniquement le nom, l'âge et la bio et le genre recherché
 */
function displayAllProfiles() {
    profiles.forEach(profile => {
        if (!profile.banned) {
            console.log(`Name: ${profile.name}, Age: ${profile.age}, Bio: ${profile.bio}, Gender Target: ${profile.genderTarget}`);
        }
    });
}

// Afficher les profils qui ont un score similaire à 1 point près 
// Exemple : si mon profil x a un score de 5, afficher les profils qui ont un score entre 4 et 6
// Prendre en compte le genre recherché et les préférences (au moins 1 préférence en commun)
function displayPossibleMatches(profileEmail, profileNumber = 3) {
    const profile = profiles.find(p => p.email === profileEmail);
    if (profile) {
        const potentialMatches = profiles.filter(p => !p.banned &&
            p.gender === profile.genderTarget &&
            Math.abs(p.score - profile.score) <= 1 &&
            p.preferences.some(pref => profile.preferences.includes(pref))
        ).slice(0, profileNumber);

        console.log("Possible Matches:");
        potentialMatches.forEach(match => {
            console.log(`Name: ${match.name}, Age: ${match.age}, Bio: ${match.bio}, Gender Target: ${match.genderTarget}`);
        });
    } else {
        console.log("Profile not found.");
    }
}

// Matcher 2 profils
function matchProfiles(email, targetEmail) {
    const profile1 = profiles.find(profile => profile.email === email);
    const profile2 = profiles.find(profile => profile.email === targetEmail);

    if (profile1 && profile2 && !profile1.banned && !profile2.banned) {
        profile1.matches.push(targetEmail);
        profile2.matches.push(email);
    } else {
        console.log("Unable to match profiles.");
    }
}

// Refuser un profil, le score du profil est diminué de 1
function refuseProfile(profileEmail) {
    const profile = profiles.find(p => p.email === profileEmail);
    if (profile) {
        profile.score -= 1;
    } else {
        console.log("Profile not found.");
    }
}

function displayMyMatches(email) {
    const profile = profiles.find(p => p.email === email);
    if (profile) {
        const matches = profile.matches.map(matchEmail => profiles.find(p => p.email === matchEmail));

        console.log("My Matches:");
        matches.forEach(match => {
            console.log(`Name: ${match.name}, Age: ${match.age}, Bio: ${match.bio}, Gender Target: ${match.genderTarget}`);
        });
    } else {
        console.log("Profile not found.");
    }
}

// Bannir un profil
function banProfile(email) {
    const profile = profiles.find(p => p.email === email);
    if (profile) {
        profile.banned = true;
    } else {
        console.log("Profile not found.");
    }
}
