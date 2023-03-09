/**
 *
 * @typedef {("afghanistan"|"albania"|"algeria"|"american_samoa"|"andorra"|"angola"|"anguilla"|"antarctica"|"antigua_and_barbuda"|"argentina"|"armenia"|"aruba"|"australia"|"austria"|"azerbaijan"|"bahamas_the"|"bahrain"|"bangladesh"|"barbados"|"belarus"|"belgium"|"belize"|"benin"|"bermuda"|"bhutan"|"bolivia_plurinational_state_of"|"bonaire_sint_eustatius_and_saba"|"bosnia_and_herzegovina"|"botswana"|"bouvet_island"|"brazil"|"british_indian_ocean_territory_the"|"brunei_darussalam"|"bulgaria"|"burkina_faso"|"burundi"|"cabo_verde"|"cambodia"|"cameroon"|"canada"|"cayman_islands_the"|"central_african_republic_the"|"chad"|"chile"|"china"|"christmas_island"|"colombia"|"comoros_the"|"congo_the_democratic_republic_of_the"|"congo_the"|"cook_islands_the"|"costa_rica"|"croatia"|"cuba"|"cyprus"|"czechia"|"denmark"|"djibouti"|"dominica"|"dominican_republic_the"|"ecuador"|"egypt"|"el_salvador"|"equatorial_guinea"|"eritrea"|"estonia"|"eswatini"|"ethiopia"|"faroe_islands_the"|"fiji"|"finland"|"france"|"french_guiana"|"french_polynesia"|"french_southern_territories_the"|"gabon"|"gambia_the"|"georgia"|"germany"|"ghana"|"gibraltar"|"greece"|"greenland"|"grenada"|"guadeloupe"|"guam"|"guatemala"|"guernsey"|"guinea"|"guyana"|"haiti"|"heard_island_and_mcdonald_islands"|"holy_see_the"|"honduras"|"hong_kong"|"hungary"|"iceland"|"india"|"indonesia"|"iran_islamic_republic_of"|"iraq"|"ireland"|"isle_of_man"|"israel"|"italy"|"jamaica"|"japan"|"jersey"|"jordan"|"kazakhstan"|"kenya"|"kiribati"|"korea_the_republic_of"|"kuwait"|"kyrgyzstan"|"latvia"|"lebanon"|"lesotho"|"liberia"|"libya"|"liechtenstein"|"lithuania"|"luxembourg"|"macao"|"madagascar"|"malawi"|"malaysia"|"maldives"|"mali"|"malta"|"marshall_islands_the"|"martinique"|"mauritania"|"mauritius"|"mayotte"|"mexico"|"micronesia_federated_states_of"|"moldova_the_republic_of"|"monaco"|"mongolia"|"montenegro"|"montserrat"|"morocco"|"mozambique"|"myanmar"|"namibia"|"nauru"|"nepal"|"netherlands_the"|"new_caledonia"|"new_zealand"|"nicaragua"|"niger_the"|"nigeria"|"niue"|"norfolk_island"|"northern_mariana_islands_the"|"norway"|"oman"|"pakistan"|"palau"|"palestine_state_of"|"panama"|"papua_new_guinea"|"paraguay"|"peru"|"philippines_the"|"pitcairn"|"poland"|"portugal"|"puerto_rico"|"qatar"|"republic_of_north_macedonia"|"romania"|"russian_federation_the"|"rwanda"|"saint_helena_ascension_and_tristan_da_cunha"|"saint_kitts_and_nevis"|"saint_lucia"|"saint_martin_french_part"|"saint_pierre_and_miquelon"|"saint_vincent_and_the_grenadines"|"samoa"|"san_marino"|"sao_tome_and_principe"|"saudi_arabia"|"senegal"|"serbia"|"seychelles"|"sierra_leone"|"singapore"|"sint_maarten_dutch_part"|"slovakia"|"slovenia"|"solomon_islands"|"somalia"|"south_africa"|"south_georgia_and_the_south_sandwich_islands"|"south_sudan"|"spain"|"sri_lanka"|"sudan_the"|"suriname"|"svalbard_and_jan_mayen"|"sweden"|"switzerland"|"syrian_arab_republic"|"taiwan_province_of_china"|"tajikistan"|"tanzania_united_republic_of"|"thailand"|"togo"|"tokelau"|"tonga"|"trinidad_and_tobago"|"tunisia"|"turkey"|"turkmenistan"|"turks_and_caicos_islands_the"|"tuvalu"|"uganda"|"ukraine"|"united_arab_emirates_the"|"united_states_minor_outlying_islands_the"|"united_states_of_america_the"|"uruguay"|"uzbekistan"|"vanuatu"|"venezuela_bolivarian_republic_of"|"viet_nam"|"virgin_islands_british"|"wallis_and_futuna"|"western_sahara"|"yemen"|"zambia"|"zimbabwe")} CountyFlags
 *
 * @typedef {object} Language
 * @property {string} code
 * @property {string} name
 * @property {CountyFlags} country_flag
 */

/**@type {Array<Language>} */
const languages = [
  {
    code: "en",
    name: "English",
    country_flag: "united_states_of_america_the",
  },
  {
    code: "de",
    name: "German",
    country_flag: "germany",
  },
  {
    code: "ru",
    name: "Russian ",
    country_flag: "russian_federation_the",
  },
];

module.exports = { languages };
