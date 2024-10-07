// fetchGithubSections.js

export interface LinkProps {
  name: string;
  path: string;
}

export interface Section {
  title: string;
  links: LinkProps[];
}


export const fetchGithubSections = async (repoOwner: string, repoName: string, path: string): Promise<Section[]> => {
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const sections: Section[] = [];

  for (const item of data) {
    if (item.type === 'dir') {
      // Appeler la fonction de manière récursive pour obtenir les sous-sections
      const subSections: Section[] = await fetchGithubSections(repoOwner, repoName, item.path);
      
      // On mappe les subSections pour extraire leurs liens et les ajouter au tableau principal
      sections.push({
        title: item.name,
        links: subSections.flatMap(subSection => subSection.links), // Aplatir les liens des sous-sections
      });
    } else if (item.name.endsWith('.mdx')) {
      // Ajouter le lien en enlevant l'extension .mdx
      sections.push({
        title: item.name.replace('.mdx', ''), // Enlève l'extension .mdx
        links: [{ name: item.name.replace('.mdx', ''), path: `/${item.path.replace('frontend/public/', '').replace('.mdx', '')}` }],
      });
    }
  }

  return sections;
};
