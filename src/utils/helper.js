
export const searchRestraurants = (searchText,allRestraurants) => {
  const SearchedRes = allRestraurants.filter((restaraunts) => {
    return restaraunts?.data?.name
      .toLowerCase()
      ?.includes(searchText.toLowerCase());
  });

  return SearchedRes;
};
