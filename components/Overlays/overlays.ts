export default function overlayConfigurations(postSlug: string, sections: any[]) {
    const postScores = [
      {
        post_slug: "medusa-js-cosmic-cms-admin-and-storefront-part-1",
        section_headers: [
          {
            section_slug: "a2-setup",
            img: {
              width: 1000,
              height: 500,
              src:"https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-m1MRYp556Ew",
              alt:""
            },
          },
          {
            section_slug: "c-create-the-admin-ui-route",
            img: {
              width: 1000,
              height: 500,
              src:"https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-m1MRYp556Ew",
              alt:""
            },
          }
        ],
      },
      {
        post_slug: "medusa-js-cosmic-cms-admin-and-storefront-part-2",
        section_headers: [
          {
            section_slug: "",
            img: {
              width: 1000,
              height: 500,
              src:"https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-m1MRYp556Ew",
              alt:""
            },
          },
          {
            section_slug: "",
            img: {
              width: 1000,
              height: 500,
              src:"https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-m1MRYp556Ew",
              alt:""
            },
          }
        ],
      },
      // Add more post scores as needed
    ];
  
    // Find post score based on post slug
    const postScore = postScores?.find(score => score.post_slug === postSlug);
    //console.log("%cpostScore:%o","color:green;font-weight:bold",postScore);
    if (!postScore) {
      return [];
    }
  
    const enhancedSections = sections.reduce((acc, section) => {
      const matchingHeader = postScore.section_headers.find(header => header.section_slug === section.section_slug);
      if (matchingHeader) {
        // Merge section data with matching header data
        acc.push({
          ...section, // original section data
          ...matchingHeader // matched article header data, including img
        });
      }
      return acc;
    }, []);

    //console.log("%cenhancedSections:%o","color:orange;font-weight:bold",enhancedSections);
    return enhancedSections;
  }
  