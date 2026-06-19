const ZONES = {
    1:{b:"EWR",z:"Newark Airport"},2:{b:"Queens",z:"Jamaica Bay"},3:{b:"Bronx",z:"Allerton/Pelham Gardens"},
    4:{b:"Manhattan",z:"Alphabet City"},5:{b:"Staten Island",z:"Arden Heights"},6:{b:"Staten Island",z:"Arrochar/Fort Wadsworth"},
    7:{b:"Queens",z:"Astoria"},8:{b:"Queens",z:"Astoria Park"},9:{b:"Queens",z:"Auburndale"},
    10:{b:"Queens",z:"Baisley Park"},11:{b:"Brooklyn",z:"Bath Beach"},12:{b:"Manhattan",z:"Battery Park"},
    13:{b:"Manhattan",z:"Battery Park City"},14:{b:"Brooklyn",z:"Bay Ridge"},15:{b:"Queens",z:"Bay Terrace/Fort Totten"},
    16:{b:"Queens",z:"Bayside"},17:{b:"Brooklyn",z:"Bedford"},18:{b:"Bronx",z:"Bedford Park"},
    19:{b:"Queens",z:"Bellerose"},20:{b:"Bronx",z:"Belmont"},21:{b:"Brooklyn",z:"Bensonhurst East"},
    22:{b:"Brooklyn",z:"Bensonhurst West"},23:{b:"Staten Island",z:"Bloomfield/Emerson Hill"},24:{b:"Manhattan",z:"Bloomingdale"},
    25:{b:"Brooklyn",z:"Boerum Hill"},26:{b:"Brooklyn",z:"Borough Park"},27:{b:"Queens",z:"Breezy Point/Fort Tilden/Riis Beach"},
    28:{b:"Queens",z:"Briarwood/Jamaica Hills"},29:{b:"Brooklyn",z:"Brighton Beach"},30:{b:"Queens",z:"Broad Channel"},
    31:{b:"Bronx",z:"Bronx Park"},32:{b:"Bronx",z:"Bronxdale"},33:{b:"Brooklyn",z:"Brooklyn Heights"},
    34:{b:"Brooklyn",z:"Brooklyn Navy Yard"},35:{b:"Brooklyn",z:"Brownsville"},36:{b:"Brooklyn",z:"Bushwick North"},
    37:{b:"Brooklyn",z:"Bushwick South"},38:{b:"Queens",z:"Cambria Heights"},39:{b:"Brooklyn",z:"Canarsie"},
    40:{b:"Brooklyn",z:"Carroll Gardens"},41:{b:"Manhattan",z:"Central Harlem"},42:{b:"Manhattan",z:"Central Harlem North"},
    43:{b:"Manhattan",z:"Central Park"},44:{b:"Staten Island",z:"Charleston/Tottenville"},45:{b:"Manhattan",z:"Chinatown"},
    46:{b:"Bronx",z:"City Island"},47:{b:"Bronx",z:"Claremont/Bathgate"},48:{b:"Manhattan",z:"Clinton East"},
    49:{b:"Brooklyn",z:"Clinton Hill"},50:{b:"Manhattan",z:"Clinton West"},51:{b:"Bronx",z:"Co-Op City"},
    52:{b:"Brooklyn",z:"Cobble Hill"},53:{b:"Queens",z:"College Point"},54:{b:"Brooklyn",z:"Columbia Street"},
    55:{b:"Brooklyn",z:"Coney Island"},56:{b:"Queens",z:"Corona"},57:{b:"Queens",z:"Corona"},
    58:{b:"Bronx",z:"Country Club"},59:{b:"Bronx",z:"Crotona Park"},60:{b:"Bronx",z:"Crotona Park East"},
    61:{b:"Brooklyn",z:"Crown Heights North"},62:{b:"Brooklyn",z:"Crown Heights South"},63:{b:"Brooklyn",z:"Cypress Hills"},
    64:{b:"Queens",z:"Douglaston"},65:{b:"Brooklyn",z:"Downtown Brooklyn/MetroTech"},66:{b:"Brooklyn",z:"DUMBO/Vinegar Hill"},
    67:{b:"Brooklyn",z:"Dyker Heights"},68:{b:"Manhattan",z:"East Chelsea"},69:{b:"Bronx",z:"East Concourse/Concourse Village"},
    70:{b:"Queens",z:"East Elmhurst"},71:{b:"Brooklyn",z:"East Flatbush/Farragut"},72:{b:"Brooklyn",z:"East Flatbush/Remsen Village"},
    73:{b:"Queens",z:"East Flushing"},74:{b:"Manhattan",z:"East Harlem North"},75:{b:"Manhattan",z:"East Harlem South"},
    76:{b:"Brooklyn",z:"East New York"},77:{b:"Brooklyn",z:"East New York/Pennsylvania Avenue"},78:{b:"Bronx",z:"East Tremont"},
    79:{b:"Manhattan",z:"East Village"},80:{b:"Brooklyn",z:"East Williamsburg"},81:{b:"Bronx",z:"Eastchester"},
    82:{b:"Queens",z:"Elmhurst"},83:{b:"Queens",z:"Elmhurst/Maspeth"},84:{b:"Staten Island",z:"Eltingville/Annadale/Prince's Bay"},
    85:{b:"Brooklyn",z:"Erasmus"},86:{b:"Queens",z:"Far Rockaway"},87:{b:"Manhattan",z:"Financial District North"},
    88:{b:"Manhattan",z:"Financial District South"},89:{b:"Brooklyn",z:"Flatbush/Ditmas Park"},90:{b:"Manhattan",z:"Flatiron"},
    91:{b:"Brooklyn",z:"Flatlands"},92:{b:"Queens",z:"Flushing"},93:{b:"Queens",z:"Flushing Meadows-Corona Park"},
    94:{b:"Bronx",z:"Fordham South"},95:{b:"Queens",z:"Forest Hills"},96:{b:"Queens",z:"Forest Park/Highland Park"},
    97:{b:"Brooklyn",z:"Fort Greene"},98:{b:"Queens",z:"Fresh Meadows"},99:{b:"Staten Island",z:"Freshkills Park"},
    100:{b:"Manhattan",z:"Garment District"},101:{b:"Queens",z:"Glen Oaks"},102:{b:"Queens",z:"Glendale"},
    103:{b:"Manhattan",z:"Governor's Island/Ellis Island/Liberty Island"},104:{b:"Manhattan",z:"Governor's Island/Ellis Island/Liberty Island"},
    105:{b:"Manhattan",z:"Governor's Island/Ellis Island/Liberty Island"},106:{b:"Brooklyn",z:"Gowanus"},107:{b:"Manhattan",z:"Gramercy"},
    108:{b:"Brooklyn",z:"Gravesend"},109:{b:"Staten Island",z:"Great Kills"},110:{b:"Staten Island",z:"Great Kills Park"},
    111:{b:"Brooklyn",z:"Green-Wood Cemetery"},112:{b:"Brooklyn",z:"Greenpoint"},113:{b:"Manhattan",z:"Greenwich Village North"},
    114:{b:"Manhattan",z:"Greenwich Village South"},115:{b:"Staten Island",z:"Grymes Hill/Clifton"},116:{b:"Manhattan",z:"Hamilton Heights"},
    117:{b:"Queens",z:"Hammels/Arverne"},118:{b:"Staten Island",z:"Heartland Village/Todt Hill"},119:{b:"Bronx",z:"Highbridge"},
    120:{b:"Manhattan",z:"Highbridge Park"},121:{b:"Queens",z:"Hillcrest/Pomonok"},122:{b:"Queens",z:"Hollis"},
    123:{b:"Brooklyn",z:"Homecrest"},124:{b:"Queens",z:"Howard Beach"},125:{b:"Manhattan",z:"Hudson Sq"},
    126:{b:"Bronx",z:"Hunts Point"},127:{b:"Manhattan",z:"Inwood"},128:{b:"Manhattan",z:"Inwood Hill Park"},
    129:{b:"Queens",z:"Jackson Heights"},130:{b:"Queens",z:"Jamaica"},131:{b:"Queens",z:"Jamaica Estates"},
    132:{b:"Queens",z:"JFK Airport"},133:{b:"Brooklyn",z:"Kensington"},134:{b:"Queens",z:"Kew Gardens"},
    135:{b:"Queens",z:"Kew Gardens Hills"},136:{b:"Bronx",z:"Kingsbridge Heights"},137:{b:"Manhattan",z:"Kips Bay"},
    138:{b:"Queens",z:"LaGuardia Airport"},139:{b:"Queens",z:"Laurelton"},140:{b:"Manhattan",z:"Lenox Hill East"},
    141:{b:"Manhattan",z:"Lenox Hill West"},142:{b:"Manhattan",z:"Lincoln Square East"},143:{b:"Manhattan",z:"Lincoln Square West"},
    144:{b:"Manhattan",z:"Little Italy/NoLiTa"},145:{b:"Queens",z:"Long Island City/Hunters Point"},146:{b:"Queens",z:"Long Island City/Queens Plaza"},
    147:{b:"Bronx",z:"Longwood"},148:{b:"Manhattan",z:"Lower East Side"},149:{b:"Brooklyn",z:"Madison"},
    150:{b:"Brooklyn",z:"Manhattan Beach"},151:{b:"Manhattan",z:"Manhattan Valley"},152:{b:"Manhattan",z:"Manhattanville"},
    153:{b:"Manhattan",z:"Marble Hill"},154:{b:"Brooklyn",z:"Marine Park/Floyd Bennett Field"},155:{b:"Brooklyn",z:"Marine Park/Mill Basin"},
    156:{b:"Staten Island",z:"Mariners Harbor"},157:{b:"Queens",z:"Maspeth"},158:{b:"Manhattan",z:"Meatpacking/West Village West"},
    159:{b:"Bronx",z:"Melrose South"},160:{b:"Queens",z:"Middle Village"},161:{b:"Manhattan",z:"Midtown Center"},
    162:{b:"Manhattan",z:"Midtown East"},163:{b:"Manhattan",z:"Midtown North"},164:{b:"Manhattan",z:"Midtown South"},
    165:{b:"Brooklyn",z:"Midwood"},166:{b:"Manhattan",z:"Morningside Heights"},167:{b:"Bronx",z:"Morrisania/Melrose"},
    168:{b:"Bronx",z:"Mott Haven/Port Morris"},169:{b:"Bronx",z:"Mount Hope"},170:{b:"Manhattan",z:"Murray Hill"},
    171:{b:"Queens",z:"Murray Hill-Queens"},172:{b:"Staten Island",z:"New Dorp/Midland Beach"},173:{b:"Queens",z:"North Corona"},
    174:{b:"Bronx",z:"Norwood"},175:{b:"Queens",z:"Oakland Gardens"},176:{b:"Staten Island",z:"Oakwood"},
    177:{b:"Brooklyn",z:"Ocean Hill"},178:{b:"Brooklyn",z:"Ocean Parkway South"},179:{b:"Queens",z:"Old Astoria"},
    180:{b:"Queens",z:"Ozone Park"},181:{b:"Brooklyn",z:"Park Slope"},182:{b:"Bronx",z:"Parkchester"},
    183:{b:"Bronx",z:"Pelham Bay"},184:{b:"Bronx",z:"Pelham Bay Park"},185:{b:"Bronx",z:"Pelham Parkway"},
    186:{b:"Manhattan",z:"Penn Station/Madison Sq West"},187:{b:"Staten Island",z:"Port Richmond"},188:{b:"Brooklyn",z:"Prospect-Lefferts Gardens"},
    189:{b:"Brooklyn",z:"Prospect Heights"},190:{b:"Brooklyn",z:"Prospect Park"},191:{b:"Queens",z:"Queens Village"},
    192:{b:"Queens",z:"Queensboro Hill"},193:{b:"Queens",z:"Queensbridge/Ravenswood"},194:{b:"Manhattan",z:"Randalls Island"},
    195:{b:"Brooklyn",z:"Red Hook"},196:{b:"Queens",z:"Rego Park"},197:{b:"Queens",z:"Richmond Hill"},
    198:{b:"Queens",z:"Ridgewood"},199:{b:"Bronx",z:"Rikers Island"},200:{b:"Bronx",z:"Riverdale/North Riverdale/Fieldston"},
    201:{b:"Queens",z:"Rockaway Park"},202:{b:"Manhattan",z:"Roosevelt Island"},203:{b:"Queens",z:"Rosedale"},
    204:{b:"Staten Island",z:"Rossville/Woodrow"},205:{b:"Queens",z:"Saint Albans"},206:{b:"Staten Island",z:"Saint George/New Brighton"},
    207:{b:"Queens",z:"Saint Michaels Cemetery/Woodside"},208:{b:"Bronx",z:"Schuylerville/Edgewater Park"},209:{b:"Manhattan",z:"Seaport"},
    210:{b:"Brooklyn",z:"Sheepshead Bay"},211:{b:"Manhattan",z:"SoHo"},212:{b:"Bronx",z:"Soundview/Bruckner"},
    213:{b:"Bronx",z:"Soundview/Castle Hill"},214:{b:"Staten Island",z:"South Beach/Dongan Hills"},215:{b:"Queens",z:"South Jamaica"},
    216:{b:"Queens",z:"South Ozone Park"},217:{b:"Brooklyn",z:"South Williamsburg"},218:{b:"Queens",z:"Springfield Gardens North"},
    219:{b:"Queens",z:"Springfield Gardens South"},220:{b:"Bronx",z:"Spuyten Duyvil/Kingsbridge"},221:{b:"Staten Island",z:"Stapleton"},
    222:{b:"Brooklyn",z:"Starrett City"},223:{b:"Queens",z:"Steinway"},224:{b:"Manhattan",z:"Stuy Town/Peter Cooper Village"},
    225:{b:"Brooklyn",z:"Stuyvesant Heights"},226:{b:"Queens",z:"Sunnyside"},227:{b:"Brooklyn",z:"Sunset Park East"},
    228:{b:"Brooklyn",z:"Sunset Park West"},229:{b:"Manhattan",z:"Sutton Place/Turtle Bay North"},230:{b:"Manhattan",z:"Times Sq/Theatre District"},
    231:{b:"Manhattan",z:"TriBeCa/Civic Center"},232:{b:"Manhattan",z:"Two Bridges/Seward Park"},233:{b:"Manhattan",z:"UN/Turtle Bay South"},
    234:{b:"Manhattan",z:"Union Sq"},235:{b:"Bronx",z:"University Heights/Morris Heights"},236:{b:"Manhattan",z:"Upper East Side North"},
    237:{b:"Manhattan",z:"Upper East Side South"},238:{b:"Manhattan",z:"Upper West Side North"},239:{b:"Manhattan",z:"Upper West Side South"},
    240:{b:"Bronx",z:"Van Cortlandt Park"},241:{b:"Bronx",z:"Van Cortlandt Village"},242:{b:"Bronx",z:"Van Nest/Morris Park"},
    243:{b:"Manhattan",z:"Washington Heights North"},244:{b:"Manhattan",z:"Washington Heights South"},245:{b:"Staten Island",z:"West Brighton"},
    246:{b:"Manhattan",z:"West Chelsea/Hudson Yards"},247:{b:"Bronx",z:"West Concourse"},248:{b:"Bronx",z:"West Farms/Bronx River"},
    249:{b:"Manhattan",z:"West Village"},250:{b:"Bronx",z:"Westchester Village/Unionport"},251:{b:"Staten Island",z:"Westerleigh"},
    252:{b:"Queens",z:"Whitestone"},253:{b:"Queens",z:"Willets Point"},254:{b:"Bronx",z:"Williamsbridge/Olinville"},
    255:{b:"Brooklyn",z:"Williamsburg (North Side)"},256:{b:"Brooklyn",z:"Williamsburg (South Side)"},257:{b:"Brooklyn",z:"Windsor Terrace"},
    258:{b:"Queens",z:"Woodhaven"},259:{b:"Bronx",z:"Woodlawn/Wakefield"},260:{b:"Queens",z:"Woodside"},
    261:{b:"Manhattan",z:"World Trade Center"},262:{b:"Manhattan",z:"Yorkville East"},263:{b:"Manhattan",z:"Yorkville West"},
    264:{b:"Unknown",z:"N/A"},265:{b:"N/A",z:"Outside of NYC"}
};

// ── MAP COORDINATES ──
const COORDS = {
    1:[40.6895,-74.1745],2:[40.617,-73.825],3:[40.865,-73.847],4:[40.726,-73.982],5:[40.542,-74.187],
    6:[40.609,-74.068],7:[40.768,-73.920],8:[40.774,-73.913],9:[40.761,-73.771],10:[40.678,-73.784],
    11:[40.603,-74.002],12:[40.714,-74.015],13:[40.715,-74.016],14:[40.632,-74.032],15:[40.793,-73.778],
    16:[40.775,-73.777],17:[40.686,-73.953],18:[40.869,-73.886],19:[40.736,-73.724],20:[40.851,-73.889],
    21:[40.613,-73.982],22:[40.604,-73.994],23:[40.600,-74.100],24:[40.805,-73.965],25:[40.685,-73.984],
    26:[40.636,-73.984],27:[40.557,-73.905],28:[40.702,-73.815],29:[40.577,-73.959],30:[40.617,-73.818],
    31:[40.843,-73.874],32:[40.855,-73.852],33:[40.698,-73.993],34:[40.699,-73.978],35:[40.661,-73.919],
    36:[40.700,-73.928],37:[40.690,-73.920],38:[40.691,-73.744],39:[40.632,-73.897],40:[40.680,-73.998],
    41:[40.795,-73.948],42:[40.807,-73.949],43:[40.771,-73.974],44:[40.524,-74.231],45:[40.715,-73.997],
    46:[40.848,-73.788],47:[40.839,-73.903],48:[40.759,-73.996],49:[40.690,-73.966],50:[40.762,-73.996],
    51:[40.870,-73.822],52:[40.685,-73.996],53:[40.788,-73.838],54:[40.681,-74.002],55:[40.573,-73.971],
    56:[40.750,-73.861],57:[40.749,-73.861],58:[40.843,-73.819],59:[40.838,-73.892],60:[40.836,-73.887],
    61:[40.671,-73.940],62:[40.661,-73.940],63:[40.685,-73.876],64:[40.776,-73.747],65:[40.690,-73.986],
    66:[40.703,-73.989],67:[40.624,-74.011],68:[40.744,-73.996],69:[40.825,-73.920],70:[40.763,-73.872],
    71:[40.643,-73.932],72:[40.650,-73.921],73:[40.766,-73.819],74:[40.791,-73.943],75:[40.783,-73.943],
    76:[40.664,-73.886],77:[40.672,-73.880],78:[40.850,-73.885],79:[40.726,-73.982],80:[40.714,-73.937],
    81:[40.863,-73.820],82:[40.740,-73.882],83:[40.734,-73.896],84:[40.538,-74.175],85:[40.641,-73.949],
    86:[40.606,-73.755],87:[40.707,-74.011],88:[40.705,-74.008],89:[40.639,-73.963],90:[40.740,-73.990],
    91:[40.620,-73.928],92:[40.761,-73.830],93:[40.745,-73.843],94:[40.859,-73.897],95:[40.725,-73.847],
    96:[40.705,-73.863],97:[40.685,-73.976],98:[40.738,-73.787],99:[40.581,-74.188],100:[40.752,-73.992],
    101:[40.745,-73.718],102:[40.702,-73.882],103:[40.690,-74.019],104:[40.689,-74.019],105:[40.689,-74.019],
    106:[40.673,-73.990],107:[40.737,-73.984],108:[40.595,-73.971],109:[40.551,-74.126],110:[40.545,-74.122],
    111:[40.652,-73.988],112:[40.730,-73.955],113:[40.735,-74.002],114:[40.730,-74.001],115:[40.625,-74.074],
    116:[40.822,-73.949],117:[40.588,-73.797],118:[40.598,-74.110],119:[40.836,-73.928],120:[40.841,-73.934],
    121:[40.722,-73.810],122:[40.711,-73.767],123:[40.602,-73.960],124:[40.660,-73.836],125:[40.730,-74.005],
    126:[40.812,-73.886],127:[40.868,-73.921],128:[40.872,-73.926],129:[40.750,-73.887],130:[40.702,-73.802],
    131:[40.718,-73.781],132:[40.641,-73.778],133:[40.637,-73.974],134:[40.706,-73.827],135:[40.728,-73.820],
    136:[40.871,-73.894],137:[40.744,-73.978],138:[40.777,-73.873],139:[40.672,-73.749],140:[40.766,-73.963],
    141:[40.764,-73.967],142:[40.774,-73.984],143:[40.772,-73.988],144:[40.720,-73.996],145:[40.744,-73.958],
    146:[40.751,-73.947],147:[40.816,-73.893],148:[40.719,-73.987],149:[40.606,-73.953],150:[40.579,-73.944],
    151:[40.796,-73.963],152:[40.813,-73.956],153:[40.876,-73.912],154:[40.601,-73.885],155:[40.619,-73.912],
    156:[40.637,-74.168],157:[40.726,-73.913],158:[40.740,-74.007],159:[40.822,-73.923],160:[40.713,-73.886],
    161:[40.755,-73.984],162:[40.753,-73.977],163:[40.761,-73.981],164:[40.749,-73.986],165:[40.625,-73.960],
    166:[40.805,-73.962],167:[40.827,-73.918],168:[40.808,-73.926],169:[40.850,-73.904],170:[40.748,-73.978],
    171:[40.761,-73.811],172:[40.568,-74.090],173:[40.755,-73.864],174:[40.878,-73.880],175:[40.744,-73.756],
    176:[40.564,-74.113],177:[40.674,-73.909],178:[40.614,-73.967],179:[40.768,-73.917],180:[40.680,-73.846],
    181:[40.672,-73.981],182:[40.835,-73.859],183:[40.853,-73.824],184:[40.856,-73.814],185:[40.857,-73.845],
    186:[40.751,-73.993],187:[40.638,-74.133],188:[40.659,-73.955],189:[40.675,-73.968],190:[40.662,-73.968],
    191:[40.723,-73.747],192:[40.752,-73.819],193:[40.754,-73.944],194:[40.793,-73.921],195:[40.676,-74.008],
    196:[40.729,-73.862],197:[40.699,-73.833],198:[40.702,-73.900],199:[40.801,-73.882],200:[40.902,-73.906],
    201:[40.580,-73.839],202:[40.762,-73.951],203:[40.653,-73.740],204:[40.553,-74.215],205:[40.692,-73.771],
    206:[40.643,-74.079],207:[40.747,-73.910],208:[40.844,-73.815],209:[40.708,-74.003],210:[40.592,-73.948],
    211:[40.723,-74.000],212:[40.819,-73.873],213:[40.824,-73.851],214:[40.592,-74.066],215:[40.689,-73.797],
    216:[40.676,-73.809],217:[40.710,-73.962],218:[40.668,-73.755],219:[40.660,-73.768],220:[40.881,-73.922],
    221:[40.629,-74.079],222:[40.651,-73.875],223:[40.771,-73.915],224:[40.736,-73.978],225:[40.682,-73.930],
    226:[40.743,-73.919],227:[40.647,-74.005],228:[40.642,-74.012],229:[40.754,-73.967],230:[40.758,-73.986],
    231:[40.718,-74.009],232:[40.712,-73.989],233:[40.749,-73.970],234:[40.736,-73.991],235:[40.854,-73.905],
    236:[40.774,-73.957],237:[40.761,-73.978],238:[40.793,-73.972],239:[40.782,-73.979],240:[40.895,-73.892],
    241:[40.880,-73.894],242:[40.846,-73.858],243:[40.843,-73.940],244:[40.834,-73.939],245:[40.639,-74.104],
    246:[40.752,-74.002],247:[40.828,-73.924],248:[40.838,-73.881],249:[40.736,-74.003],250:[40.837,-73.848],
    251:[40.618,-74.121],252:[40.790,-73.808],253:[40.760,-73.843],254:[40.878,-73.859],255:[40.718,-73.960],
    256:[40.711,-73.958],257:[40.656,-73.978],258:[40.690,-73.856],259:[40.897,-73.858],260:[40.746,-73.908],
    261:[40.712,-74.013],262:[40.766,-73.952],263:[40.768,-73.957],264:[40.713,-74.009],265:[40.758,-73.986]
};

// ── TRIP DATA ──
const TRIPS = [
    {pu:148,do:148,dist:0.1,fare:2.5,pass:2,p:"2019-01-01 00:32",d:"2019-01-01 00:33"},
    {pu:170,do:238,dist:4.13,fare:19,pass:1,p:"2019-01-01 00:14",d:"2019-01-01 00:40"},
    {pu:162,do:234,dist:1.35,fare:8.5,pass:1,p:"2019-01-01 00:31",d:"2019-01-01 00:42"},
    {pu:234,do:234,dist:0,fare:2.5,pass:1,p:"2019-01-01 00:45",d:"2019-01-01 00:46"},
    {pu:234,do:234,dist:0.16,fare:3,pass:1,p:"2019-01-01 00:48",d:"2019-01-01 00:49"},
    {pu:234,do:113,dist:0.42,fare:4.5,pass:4,p:"2019-01-01 00:22",d:"2019-01-01 00:26"},
    {pu:161,do:163,dist:0.47,fare:24,pass:5,p:"2019-01-01 00:43",d:"2019-01-01 00:51"},
    {pu:142,do:142,dist:0.7,fare:52,pass:1,p:"2019-01-01 00:22",d:"2019-01-01 00:27"},
    {pu:42,do:41,dist:0.4,fare:4,pass:2,p:"2019-01-01 00:10",d:"2019-01-01 00:13"},
    {pu:79,do:184,dist:15.13,fare:43.5,pass:1,p:"2019-01-01 00:55",d:"2019-01-01 01:30"},
    {pu:78,do:78,dist:0,fare:3.5,pass:1,p:"2019-01-01 00:43",d:"2019-01-01 00:46"},
    {pu:68,do:246,dist:0.13,fare:3.5,pass:1,p:"2019-01-01 00:45",d:"2019-01-01 00:47"},
    {pu:186,do:186,dist:0.36,fare:3.5,pass:1,p:"2019-01-01 00:51",d:"2019-01-01 00:53"},
    {pu:107,do:100,dist:0.1,fare:3,pass:1,p:"2019-01-01 00:19",d:"2019-01-01 00:20"},
    {pu:141,do:141,dist:0.05,fare:3,pass:4,p:"2019-01-01 01:56",d:"2019-01-01 01:57"},
    {pu:264,do:264,dist:0.01,fare:2.5,pass:5,p:"2019-01-01 01:03",d:"2019-01-01 01:04"},
    {pu:136,do:238,dist:8.83,fare:27,pass:1,p:"2019-01-01 01:40",d:"2019-01-01 02:03"},
    {pu:148,do:148,dist:0.19,fare:3.5,pass:2,p:"2019-01-01 01:25",d:"2019-01-01 01:27"},
    {pu:50,do:50,dist:0.23,fare:3.5,pass:1,p:"2019-01-01 01:09",d:"2019-01-01 01:11"},
    {pu:107,do:107,dist:0.01,fare:2.5,pass:1,p:"2019-01-01 01:23",d:"2019-01-01 01:23"},
    {pu:132,do:132,dist:1.02,fare:5,pass:1,p:"2019-01-01 01:09",d:"2019-01-01 01:10"},
    {pu:166,do:151,dist:0.9,fare:5,pass:1,p:"2019-01-01 00:33",d:"2019-01-01 00:36"},
    {pu:42,do:167,dist:4.89,fare:16.5,pass:3,p:"2019-01-01 01:00",d:"2019-01-01 01:15"},
    {pu:74,do:75,dist:1.58,fare:8,pass:2,p:"2019-01-01 01:35",d:"2019-01-01 01:43"},
    {pu:232,do:232,dist:0,fare:3,pass:1,p:"2019-01-01 01:12",d:"2019-01-01 01:13"},
    {pu:249,do:90,dist:0.9,fare:5,pass:1,p:"2019-01-01 01:44",d:"2019-01-01 01:48"},
    {pu:236,do:236,dist:0.19,fare:3.5,pass:2,p:"2019-01-01 01:47",d:"2019-01-01 01:50"},
    {pu:161,do:237,dist:0.87,fare:5,pass:1,p:"2019-01-01 01:50",d:"2019-01-01 01:54"},
    {pu:146,do:130,dist:10.3,fare:33,pass:1,p:"2019-01-01 01:47",d:"2019-01-01 02:14"},
    {pu:162,do:260,dist:4.87,fare:17,pass:2,p:"2019-01-01 02:44",d:"2019-01-01 03:03"},
    {pu:68,do:246,dist:0.37,fare:3.5,pass:2,p:"2019-01-01 02:38",d:"2019-01-01 02:41"},
    {pu:97,do:97,dist:0.03,fare:3,pass:1,p:"2019-01-01 02:01",d:"2019-01-01 02:03"},
    {pu:4,do:4,dist:0.31,fare:3.5,pass:2,p:"2019-01-01 02:21",d:"2019-01-01 02:23"},
    {pu:230,do:237,dist:0.88,fare:14,pass:1,p:"2019-01-01 02:14",d:"2019-01-01 02:57"},
    {pu:246,do:246,dist:0.82,fare:6,pass:1,p:"2019-01-01 02:07",d:"2019-01-01 02:15"},
    {pu:170,do:137,dist:0.4,fare:4,pass:1,p:"2019-01-01 02:25",d:"2019-01-01 02:28"},
    {pu:74,do:75,dist:0.42,fare:3.5,pass:1,p:"2019-01-01 02:21",d:"2019-01-01 02:23"},
    {pu:236,do:262,dist:0.8,fare:6,pass:1,p:"2019-01-01 02:29",d:"2019-01-01 02:34"},
    {pu:244,do:244,dist:0.14,fare:3.5,pass:1,p:"2019-01-01 02:34",d:"2019-01-01 02:36"},
    {pu:244,do:244,dist:0.04,fare:2.5,pass:2,p:"2019-01-01 02:43",d:"2019-01-01 02:44"},
    {pu:148,do:148,dist:0.62,fare:5,pass:1,p:"2019-01-01 02:14",d:"2019-01-01 02:21"},
    {pu:263,do:263,dist:0.03,fare:2.5,pass:1,p:"2019-01-01 02:57",d:"2019-01-01 02:58"},
    {pu:170,do:234,dist:0.1,fare:3,pass:1,p:"2019-01-01 02:28",d:"2019-01-01 02:30"},
    {pu:50,do:50,dist:0.13,fare:3,pass:1,p:"2019-01-01 02:51",d:"2019-01-01 02:53"},
    {pu:179,do:7,dist:0.8,fare:5.5,pass:4,p:"2019-01-01 02:34",d:"2019-01-01 02:40"},
    {pu:146,do:223,dist:3.54,fare:13,pass:1,p:"2019-01-01 02:54",d:"2019-01-01 03:05"},
    {pu:87,do:261,dist:0.35,fare:4,pass:2,p:"2019-01-01 03:43",d:"2019-01-01 03:46"},
    {pu:113,do:113,dist:0,fare:2.5,pass:1,p:"2019-01-01 03:19",d:"2019-01-01 03:20"},
    {pu:166,do:166,dist:0,fare:2.5,pass:5,p:"2019-01-01 03:48",d:"2019-01-01 03:49"},
    {pu:263,do:236,dist:0.67,fare:4.5,pass:1,p:"2019-01-01 03:06",d:"2019-01-01 03:09"},
    {pu:170,do:234,dist:0.03,fare:3,pass:1,p:"2019-01-01 03:00",d:"2019-01-01 03:02"},
    {pu:45,do:181,dist:4.02,fare:15,pass:1,p:"2019-01-01 03:54",d:"2019-01-01 04:12"},
    {pu:234,do:186,dist:0.84,fare:5,pass:1,p:"2019-01-01 03:25",d:"2019-01-01 03:30"},
    {pu:230,do:230,dist:0.01,fare:2.5,pass:1,p:"2019-01-01 03:04",d:"2019-01-01 03:04"},
    {pu:226,do:226,dist:0.02,fare:2.5,pass:1,p:"2019-01-01 03:03",d:"2019-01-01 03:04"},
    {pu:132,do:132,dist:0,fare:2.5,pass:6,p:"2019-01-01 03:35",d:"2019-01-01 03:35"},
    {pu:168,do:74,dist:0,fare:2.5,pass:1,p:"2019-01-01 04:53",d:"2019-01-01 04:53"},
    {pu:146,do:146,dist:0.03,fare:2.5,pass:5,p:"2019-01-01 04:39",d:"2019-01-01 04:39"},
    {pu:75,do:75,dist:0.81,fare:4.5,pass:1,p:"2019-01-01 04:23",d:"2019-01-01 04:26"},
    {pu:132,do:132,dist:0.3,fare:3,pass:1,p:"2019-01-01 04:35",d:"2019-01-01 04:35"},
    {pu:164,do:164,dist:0,fare:4,pass:2,p:"2019-01-01 04:04",d:"2019-01-01 04:07"},
    {pu:239,do:239,dist:0,fare:2.5,pass:2,p:"2019-01-01 04:34",d:"2019-01-01 04:34"},
    {pu:163,do:161,dist:0.45,fare:4.5,pass:1,p:"2019-01-01 04:30",d:"2019-01-01 04:34"},
    {pu:234,do:234,dist:0,fare:2.5,pass:1,p:"2019-01-01 04:23",d:"2019-01-01 04:24"},
    {pu:148,do:4,dist:0.78,fare:5,pass:1,p:"2019-01-01 04:55",d:"2019-01-01 04:59"},
    {pu:255,do:256,dist:0.73,fare:4.5,pass:1,p:"2019-01-01 04:15",d:"2019-01-01 04:19"},
    {pu:264,do:264,dist:0.32,fare:3.5,pass:1,p:"2019-01-01 04:03",d:"2019-01-01 04:05"},
    {pu:230,do:50,dist:0.89,fare:5.5,pass:1,p:"2019-01-01 04:40",d:"2019-01-01 04:45"},
    {pu:161,do:141,dist:0.8,fare:4.5,pass:2,p:"2019-01-01 05:55",d:"2019-01-01 05:57"},
    {pu:79,do:113,dist:0.19,fare:3.5,pass:2,p:"2019-01-01 05:13",d:"2019-01-01 05:15"},
    {pu:162,do:162,dist:0.38,fare:3.5,pass:1,p:"2019-01-01 05:05",d:"2019-01-01 05:07"},
    {pu:50,do:100,dist:0.48,fare:19.5,pass:6,p:"2019-01-01 05:02",d:"2019-01-01 05:54"},
    {pu:145,do:49,dist:4.25,fare:14,pass:1,p:"2019-01-01 05:15",d:"2019-01-01 05:25"},
    {pu:48,do:186,dist:0.95,fare:5.5,pass:1,p:"2019-01-01 05:35",d:"2019-01-01 05:40"},
    {pu:249,do:112,dist:6.95,fare:22.5,pass:1,p:"2019-01-01 06:28",d:"2019-01-01 06:51"},
    {pu:164,do:233,dist:0.75,fare:6,pass:1,p:"2019-01-01 06:49",d:"2019-01-01 06:55"},
    {pu:262,do:262,dist:0.01,fare:2.5,pass:1,p:"2019-01-01 06:56",d:"2019-01-01 06:57"},
    {pu:129,do:129,dist:0.05,fare:2.5,pass:1,p:"2019-01-01 06:24",d:"2019-01-01 06:25"},
    {pu:170,do:68,dist:0.76,fare:4.5,pass:1,p:"2019-01-01 06:01",d:"2019-01-01 06:04"},
    {pu:80,do:80,dist:0.45,fare:4,pass:1,p:"2019-01-01 07:03",d:"2019-01-01 07:06"},
    {pu:230,do:162,dist:0.87,fare:6,pass:3,p:"2019-01-01 07:18",d:"2019-01-01 07:24"},
    {pu:122,do:122,dist:0,fare:2.5,pass:2,p:"2019-01-01 07:22",d:"2019-01-01 07:22"},
    {pu:77,do:77,dist:0.01,fare:2.5,pass:1,p:"2019-01-01 07:38",d:"2019-01-01 07:38"},
    {pu:161,do:164,dist:1.08,fare:6,pass:1,p:"2019-01-01 07:13",d:"2019-01-01 07:19"},
    {pu:113,do:249,dist:0.01,fare:4,pass:1,p:"2019-01-01 07:45",d:"2019-01-01 07:48"},
    {pu:142,do:138,dist:10.01,fare:30,pass:1,p:"2019-01-01 08:28",d:"2019-01-01 08:52"},
    {pu:226,do:157,dist:0.09,fare:2.5,pass:1,p:"2019-01-01 08:51",d:"2019-01-01 08:51"},
    {pu:237,do:132,dist:16.9,fare:52,pass:3,p:"2019-01-01 08:00",d:"2019-01-01 08:27"},
    {pu:29,do:29,dist:0,fare:2.5,pass:1,p:"2019-01-01 09:12",d:"2019-01-01 09:12"},
    {pu:33,do:33,dist:0.41,fare:3.5,pass:3,p:"2019-01-01 09:38",d:"2019-01-01 09:40"},
    {pu:76,do:77,dist:0,fare:2.5,pass:2,p:"2019-01-01 09:19",d:"2019-01-01 09:20"},
    {pu:37,do:17,dist:0.42,fare:5,pass:1,p:"2019-01-01 09:47",d:"2019-01-01 09:51"},
    {pu:24,do:166,dist:0.36,fare:4,pass:1,p:"2019-01-01 10:34",d:"2019-01-01 10:36"},
    {pu:90,do:249,dist:0.69,fare:5.5,pass:1,p:"2019-01-01 10:14",d:"2019-01-01 10:19"},
    {pu:239,do:239,dist:0.21,fare:3,pass:6,p:"2019-01-01 10:34",d:"2019-01-01 10:35"},
    {pu:79,do:113,dist:0.41,fare:4,pass:1,p:"2019-01-01 11:09",d:"2019-01-01 11:12"},
    {pu:186,do:170,dist:0.73,fare:5,pass:3,p:"2019-01-01 11:38",d:"2019-01-01 11:43"},
    {pu:145,do:145,dist:4.93,fare:15.5,pass:1,p:"2019-01-01 11:30",d:"2019-01-01 11:41"},
    {pu:145,do:145,dist:0.75,fare:5.5,pass:1,p:"2019-01-01 11:56",d:"2019-01-01 12:01"},
    {pu:236,do:236,dist:0.39,fare:3,pass:1,p:"2019-01-01 12:35",d:"2019-01-01 12:36"},
    {pu:230,do:163,dist:0.42,fare:4,pass:1,p:"2019-01-01 12:20",d:"2019-01-01 12:22"},
    {pu:143,do:142,dist:0.9,fare:5.5,pass:1,p:"2019-01-01 12:02",d:"2019-01-01 12:07"},
    {pu:164,do:68,dist:1.18,fare:7,pass:1,p:"2019-01-01 12:22",d:"2019-01-01 12:29"},
    {pu:170,do:170,dist:0.32,fare:3.5,pass:1,p:"2019-01-01 12:47",d:"2019-01-01 12:49"},
    {pu:231,do:231,dist:0,fare:2.5,pass:3,p:"2019-01-01 12:24",d:"2019-01-01 12:24"},
    {pu:163,do:142,dist:0,fare:5.5,pass:2,p:"2019-01-01 12:43",d:"2019-01-01 12:49"},
    {pu:211,do:211,dist:0.09,fare:3,pass:2,p:"2019-01-01 12:18",d:"2019-01-01 12:19"},
    {pu:142,do:142,dist:0.31,fare:3.5,pass:1,p:"2019-01-01 12:33",d:"2019-01-01 12:35"},
    {pu:48,do:50,dist:0.58,fare:4.5,pass:1,p:"2019-01-01 12:40",d:"2019-01-01 12:44"},
    {pu:263,do:75,dist:0.95,fare:5.5,pass:1,p:"2019-01-01 12:46",d:"2019-01-01 12:51"},
    {pu:186,do:231,dist:3.56,fare:14,pass:1,p:"2019-01-01 13:19",d:"2019-01-01 13:33"},
    {pu:170,do:137,dist:0.05,fare:2.5,pass:5,p:"2019-01-01 13:09",d:"2019-01-01 13:09"},
    {pu:211,do:144,dist:0.38,fare:4,pass:1,p:"2019-01-01 13:39",d:"2019-01-01 13:43"},
    {pu:229,do:141,dist:0.41,fare:4,pass:1,p:"2019-01-01 13:38",d:"2019-01-01 13:41"},
    {pu:164,do:138,dist:9.49,fare:27.5,pass:1,p:"2019-01-01 13:15",d:"2019-01-01 13:33"},
    {pu:164,do:234,dist:0.03,fare:3.5,pass:1,p:"2019-01-01 13:18",d:"2019-01-01 13:21"},
    {pu:236,do:236,dist:0.12,fare:3,pass:3,p:"2019-01-01 13:53",d:"2019-01-01 13:54"},
    {pu:65,do:65,dist:0.04,fare:2.5,pass:1,p:"2019-01-01 13:58",d:"2019-01-01 13:58"},
    {pu:162,do:163,dist:0.2,fare:5.5,pass:2,p:"2019-01-01 13:48",d:"2019-01-01 13:59"},
    {pu:48,do:161,dist:0.89,fare:7,pass:1,p:"2019-01-01 14:13",d:"2019-01-01 14:21"},
    {pu:144,do:209,dist:3.04,fare:12.5,pass:1,p:"2019-01-01 14:05",d:"2019-01-01 14:18"},
    {pu:148,do:148,dist:0.11,fare:3,pass:1,p:"2019-01-01 14:55",d:"2019-01-01 14:56"},
    {pu:237,do:43,dist:0,fare:2.5,pass:2,p:"2019-01-01 14:08",d:"2019-01-01 14:08"},
    {pu:79,do:79,dist:0.07,fare:2.5,pass:1,p:"2019-01-01 14:12",d:"2019-01-01 14:13"},
    {pu:234,do:233,dist:1.82,fare:9,pass:3,p:"2019-01-01 14:40",d:"2019-01-01 14:50"},
    {pu:100,do:13,dist:4.28,fare:16.5,pass:4,p:"2019-01-01 14:25",d:"2019-01-01 14:43"},
    {pu:142,do:43,dist:0.18,fare:4.5,pass:1,p:"2019-01-01 14:12",d:"2019-01-01 14:16"},
    {pu:163,do:163,dist:0.48,fare:5,pass:5,p:"2019-01-01 14:54",d:"2019-01-01 14:58"},
    {pu:162,do:230,dist:0.81,fare:5.5,pass:1,p:"2019-01-01 14:11",d:"2019-01-01 14:17"},
    {pu:74,do:41,dist:0.4,fare:4,pass:1,p:"2019-01-01 14:06",d:"2019-01-01 14:09"},
    {pu:197,do:197,dist:0.04,fare:2.5,pass:1,p:"2019-01-01 14:22",d:"2019-01-01 14:22"},
    {pu:209,do:261,dist:0.47,fare:4.5,pass:1,p:"2019-01-01 14:48",d:"2019-01-01 14:52"},
    {pu:238,do:151,dist:0.81,fare:6,pass:1,p:"2019-01-01 15:04",d:"2019-01-01 15:10"},
    {pu:163,do:229,dist:0.6,fare:4.5,pass:1,p:"2019-01-01 15:57",d:"2019-01-01 16:01"},
    {pu:79,do:170,dist:0.81,fare:4.5,pass:1,p:"2019-01-01 15:25",d:"2019-01-01 15:27"},
    {pu:132,do:132,dist:0.06,fare:2.5,pass:1,p:"2019-01-01 15:10",d:"2019-01-01 15:10"},
    {pu:68,do:68,dist:0,fare:2.5,pass:1,p:"2019-01-01 15:06",d:"2019-01-01 15:07"},
    {pu:79,do:113,dist:0.41,fare:4,pass:1,p:"2019-01-01 15:17",d:"2019-01-01 15:20"},
    {pu:138,do:138,dist:0,fare:2.5,pass:1,p:"2019-01-01 15:04",d:"2019-01-01 15:04"},
    {pu:186,do:234,dist:0.95,fare:5.5,pass:5,p:"2019-01-01 15:46",d:"2019-01-01 15:50"},
    {pu:239,do:238,dist:0.73,fare:4.5,pass:1,p:"2019-01-01 15:00",d:"2019-01-01 15:03"},
    {pu:100,do:100,dist:1.23,fare:8,pass:3,p:"2019-01-01 15:17",d:"2019-01-01 15:27"},
    {pu:162,do:170,dist:0.4,fare:3.5,pass:1,p:"2019-01-01 15:43",d:"2019-01-01 15:44"},
    {pu:141,do:141,dist:0.17,fare:2.5,pass:1,p:"2019-01-01 16:03",d:"2019-01-01 16:04"},
    {pu:144,do:158,dist:2.25,fare:10,pass:1,p:"2019-01-01 16:18",d:"2019-01-01 16:30"},
    {pu:164,do:170,dist:0.82,fare:6.5,pass:5,p:"2019-01-01 16:02",d:"2019-01-01 16:09"},
    {pu:237,do:236,dist:0.99,fare:6,pass:5,p:"2019-01-01 16:32",d:"2019-01-01 16:37"},
    {pu:230,do:170,dist:0.36,fare:3.5,pass:1,p:"2019-01-01 17:22",d:"2019-01-01 17:24"},
    {pu:233,do:162,dist:0.24,fare:3.5,pass:1,p:"2019-01-01 17:26",d:"2019-01-01 17:28"},
    {pu:132,do:132,dist:0.04,fare:2.5,pass:1,p:"2019-01-01 17:28",d:"2019-01-01 17:28"},
    {pu:79,do:79,dist:0,fare:2.5,pass:1,p:"2019-01-01 17:43",d:"2019-01-01 17:44"},
    {pu:264,do:264,dist:0,fare:2.5,pass:1,p:"2019-01-01 17:31",d:"2019-01-01 17:32"},
    {pu:229,do:229,dist:0.03,fare:3,pass:2,p:"2019-01-01 17:53",d:"2019-01-01 17:54"},
    {pu:166,do:166,dist:0.04,fare:2.5,pass:2,p:"2019-01-01 18:03",d:"2019-01-01 18:03"},
    {pu:43,do:239,dist:0.6,fare:4,pass:3,p:"2019-01-01 18:39",d:"2019-01-01 18:40"},
    {pu:100,do:186,dist:0,fare:2.5,pass:1,p:"2019-01-01 18:03",d:"2019-01-01 18:03"},
    {pu:164,do:230,dist:0.83,fare:5,pass:1,p:"2019-01-01 18:01",d:"2019-01-01 18:05"},
    {pu:79,do:137,dist:0.99,fare:6,pass:1,p:"2019-01-01 18:45",d:"2019-01-01 18:50"},
    {pu:162,do:161,dist:0.19,fare:3,pass:5,p:"2019-01-01 18:54",d:"2019-01-01 18:56"},
    {pu:151,do:151,dist:0.83,fare:5.5,pass:1,p:"2019-01-01 18:13",d:"2019-01-01 18:19"},
    {pu:230,do:48,dist:0.41,fare:4.5,pass:1,p:"2019-01-01 18:29",d:"2019-01-01 18:36"},
    {pu:62,do:62,dist:0,fare:2.5,pass:1,p:"2019-01-01 18:23",d:"2019-01-01 18:23"},
    {pu:229,do:162,dist:0.67,fare:4,pass:1,p:"2019-01-01 18:07",d:"2019-01-01 18:10"},
    {pu:263,do:262,dist:0.28,fare:3,pass:2,p:"2019-01-01 19:39",d:"2019-01-01 19:40"},
    {pu:132,do:132,dist:0.01,fare:2.5,pass:3,p:"2019-01-01 19:28",d:"2019-01-01 19:28"},
    {pu:142,do:142,dist:0.49,fare:3.5,pass:2,p:"2019-01-01 19:02",d:"2019-01-01 19:04"},
    {pu:144,do:144,dist:0.07,fare:2.5,pass:1,p:"2019-01-01 19:11",d:"2019-01-01 19:11"},
    {pu:132,do:132,dist:0,fare:2.5,pass:1,p:"2019-01-01 19:54",d:"2019-01-01 19:54"},
    {pu:263,do:263,dist:0,fare:2.5,pass:6,p:"2019-01-01 19:18",d:"2019-01-01 19:22"},
    {pu:158,do:90,dist:0.41,fare:6.5,pass:1,p:"2019-01-01 19:53",d:"2019-01-01 20:01"},
    {pu:143,do:143,dist:0.03,fare:2.5,pass:1,p:"2019-01-01 18:57",d:"2019-01-01 18:57"},
    {pu:100,do:230,dist:0.71,fare:6.5,pass:1,p:"2019-01-01 19:39",d:"2019-01-01 19:47"},
    {pu:244,do:116,dist:0.59,fare:4.5,pass:1,p:"2019-01-01 20:56",d:"2019-01-01 21:00"},
    {pu:193,do:7,dist:0.78,fare:4,pass:1,p:"2019-01-01 20:37",d:"2019-01-01 20:40"},
    {pu:43,do:230,dist:0.71,fare:5.5,pass:2,p:"2019-01-01 20:02",d:"2019-01-01 20:08"},
    {pu:263,do:263,dist:0.37,fare:3.5,pass:1,p:"2019-01-01 20:26",d:"2019-01-01 20:27"},
    {pu:237,do:161,dist:0.51,fare:5.5,pass:5,p:"2019-01-01 20:25",d:"2019-01-01 20:30"},
    {pu:163,do:230,dist:1.1,fare:6.5,pass:1,p:"2019-01-01 20:46",d:"2019-01-01 20:53"},
    {pu:100,do:100,dist:0.27,fare:4.5,pass:1,p:"2019-01-01 20:41",d:"2019-01-01 20:45"},
    {pu:164,do:234,dist:0.29,fare:3.5,pass:1,p:"2019-01-01 20:04",d:"2019-01-01 20:07"},
    {pu:219,do:219,dist:0,fare:5,pass:1,p:"2019-01-01 20:58",d:"2019-01-01 21:04"},
    {pu:236,do:75,dist:0.93,fare:5,pass:3,p:"2019-01-01 20:49",d:"2019-01-01 20:52"},
    {pu:238,do:238,dist:0.55,fare:6,pass:1,p:"2019-01-01 21:36",d:"2019-01-01 21:43"},
    {pu:238,do:238,dist:0.34,fare:3.5,pass:1,p:"2019-01-01 21:52",d:"2019-01-01 21:54"},
    {pu:216,do:216,dist:0.33,fare:3.5,pass:1,p:"2019-01-01 21:06",d:"2019-01-01 21:07"},
    {pu:50,do:48,dist:0.65,fare:5,pass:2,p:"2019-01-01 21:21",d:"2019-01-01 21:25"},
    {pu:100,do:100,dist:0.12,fare:3.5,pass:1,p:"2019-01-01 21:35",d:"2019-01-01 21:37"},
    {pu:152,do:116,dist:0.9,fare:6,pass:1,p:"2019-01-01 21:14",d:"2019-01-01 21:19"},
    {pu:24,do:43,dist:0.57,fare:4.5,pass:1,p:"2019-01-01 21:41",d:"2019-01-01 21:44"},
    {pu:233,do:233,dist:0.06,fare:2.5,pass:1,p:"2019-01-01 22:09",d:"2019-01-01 22:09"},
    {pu:234,do:164,dist:0.57,fare:4.5,pass:5,p:"2019-01-01 22:44",d:"2019-01-01 22:47"},
    {pu:141,do:263,dist:0.54,fare:4,pass:5,p:"2019-01-01 22:38",d:"2019-01-01 22:40"},
    {pu:229,do:229,dist:0.58,fare:4.5,pass:1,p:"2019-01-01 22:31",d:"2019-01-01 22:35"},
    {pu:48,do:48,dist:0.45,fare:4,pass:1,p:"2019-01-01 22:28",d:"2019-01-01 22:31"},
    {pu:164,do:107,dist:0.68,fare:12,pass:1,p:"2019-01-01 22:57",d:"2019-01-01 23:16"},
    {pu:132,do:132,dist:0,fare:2.5,pass:1,p:"2019-01-01 22:46",d:"2019-01-01 22:46"},
    {pu:132,do:132,dist:0.02,fare:2.5,pass:1,p:"2019-01-01 23:57",d:"2019-01-01 23:57"},
    {pu:264,do:132,dist:0,fare:2.5,pass:2,p:"2019-01-01 23:57",d:"2019-01-01 23:57"},
    {pu:132,do:132,dist:0.05,fare:2.5,pass:1,p:"2019-01-01 23:54",d:"2019-01-01 23:55"},
    {pu:48,do:48,dist:0.07,fare:2.5,pass:1,p:"2019-01-01 23:50",d:"2019-01-01 23:50"},
    {pu:234,do:107,dist:0.25,fare:3.5,pass:1,p:"2019-01-01 23:20",d:"2019-01-01 23:23"},
    {pu:107,do:4,dist:0.83,fare:5,pass:1,p:"2019-01-01 23:21",d:"2019-01-01 23:24"},
    {pu:186,do:100,dist:0.44,fare:4,pass:1,p:"2019-01-01 23:38",d:"2019-01-01 23:41"},
    {pu:234,do:170,dist:0.2,fare:3,pass:1,p:"2019-01-01 23:53",d:"2019-01-01 23:54"}
];

// ── STATE ──
let allData = [], filteredData = [], charts = {}, map;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
    processData();
    applyFilters();
    initCharts();
    initMap();
    updateAll();
    document.getElementById('btn-apply').addEventListener('click', () => { applyFilters(); updateAll(); });
    document.getElementById('btn-reset').addEventListener('click', () => {
        ['time','borough','distance','fare'].forEach(f => document.getElementById('filter-'+f).value='all');
        applyFilters(); updateAll();
    });
    document.getElementById('last-updated').textContent = new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
    window.addEventListener('scroll', () => {
        const pct = Math.min(100, Math.round((window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100));
        document.querySelector('.nav-progress').style.width = pct+'%';
    });
});

// ── PROCESS ──
function processData() {
    allData = TRIPS.map(t => {
        const h = new Date(t.p).getHours();
        const pz = ZONES[t.pu]||{b:'Unknown',z:'Unknown'};
        const dz = ZONES[t.do]||{b:'Unknown',z:'Unknown'};
        return {...t, pickupBorough:pz.b, pickupZone:pz.z, dropoffBorough:dz.b, dropoffZone:dz.z,
            hour:h, timeOfDay:h>=6&&h<12?'morning':h>=12&&h<18?'afternoon':h>=18&&h<24?'evening':'night',
            duration:Math.max(0,(new Date(t.d)-new Date(t.p))/60000)};
    }).filter(t => t.fare>0 && t.dist>=0 && t.duration>=0);
}

// ── FILTERS ──
function applyFilters() {
    const time=document.getElementById('filter-time').value;
    const borough=document.getElementById('filter-borough').value;
    const dist=document.getElementById('filter-distance').value;
    const fare=document.getElementById('filter-fare').value;
    filteredData = allData.filter(t => {
        if(time!=='all'&&t.timeOfDay!==time) return false;
        if(borough!=='all'&&t.pickupBorough!==borough) return false;
        if(dist==='short'&&t.dist>=2) return false;
        if(dist==='medium'&&(t.dist<2||t.dist>=10)) return false;
        if(dist==='long'&&t.dist<10) return false;
        if(fare==='low'&&t.fare>=15) return false;
        if(fare==='mid'&&(t.fare<15||t.fare>=50)) return false;
        if(fare==='high'&&t.fare<50) return false;
        return true;
    });
}

// ── UPDATE ALL ──
function updateAll() { updateKPIs(); updateCharts(); updateMap(); renderTable(); }

// ── KPIs ──
function updateKPIs() {
    const d=filteredData;
    if(!d.length){document.getElementById('kpi-trips').textContent='0';document.getElementById('kpi-fare').textContent='$0.00';document.getElementById('kpi-distance').textContent='0.0 mi';document.getElementById('kpi-duration').textContent='0m';return;}
    const n=d.length;
    document.getElementById('kpi-trips').textContent=n.toLocaleString();
    document.getElementById('kpi-fare').textContent='$'+(d.reduce((s,t)=>s+t.fare,0)/n).toFixed(2);
    document.getElementById('kpi-distance').textContent=(d.reduce((s,t)=>s+t.dist,0)/n).toFixed(1)+' mi';
    const avg=d.reduce((s,t)=>s+t.duration,0)/n;
    document.getElementById('kpi-duration').textContent=avg>=60?Math.floor(avg/60)+'h '+Math.round(avg%60)+'m':Math.round(avg)+'m';
}

// ── CHARTS (COMPACT) ──
function initCharts() {
    Chart.defaults.color='#888';
    Chart.defaults.borderColor='rgba(255,255,255,0.05)';
    Chart.defaults.font={size:11};

    charts.borough=new Chart(document.getElementById('chart-borough'),{
        type:'bar',data:{labels:[],datasets:[{data:[],backgroundColor:['rgba(247,201,72,0.9)','rgba(52,152,219,0.8)','rgba(46,204,113,0.8)','rgba(230,126,34,0.8)','rgba(155,89,182,0.8)'],borderRadius:6}]},
        options:{responsive:true,maintainAspectRatio:true,aspectRatio:2.8,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+ctx.raw.toLocaleString()+' trips'}}},scales:{y:{ticks:{color:'#888',font:{size:10}},grid:{color:'rgba(255,255,255,0.03)'}},x:{ticks:{color:'#888',font:{size:10}},grid:{display:false}}}}
    });

    charts.time=new Chart(document.getElementById('chart-time'),{
        type:'line',data:{labels:['12a','1','2','3','4','5','6','7','8','9','10','11','12p','1','2','3','4','5','6','7','8','9','10','11'],datasets:[{data:new Array(24).fill(0),borderColor:'#F7C948',backgroundColor:'rgba(247,201,72,0.12)',borderWidth:2,tension:0.4,fill:true,pointRadius:0,pointHoverRadius:4}]},
        options:{responsive:true,maintainAspectRatio:true,aspectRatio:2.8,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+ctx.raw+' trips'}}},scales:{y:{ticks:{color:'#888',font:{size:10},maxTicksLimit:5},grid:{color:'rgba(255,255,255,0.03)'}},x:{ticks:{color:'#888',font:{size:9},maxTicksLimit:12},grid:{display:false}}}}
    });

    charts.fare=new Chart(document.getElementById('chart-fare'),{
        type:'bar',data:{labels:[],datasets:[{data:[],backgroundColor:['rgba(247,201,72,0.9)','rgba(52,152,219,0.8)','rgba(46,204,113,0.8)','rgba(230,126,34,0.8)','rgba(155,89,182,0.8)'],borderRadius:6}]},
        options:{responsive:true,maintainAspectRatio:true,aspectRatio:2.8,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' $'+ctx.raw+' avg fare'}}},scales:{y:{ticks:{color:'#888',font:{size:10},callback:v=>'$'+v},grid:{color:'rgba(255,255,255,0.03)'}},x:{ticks:{color:'#888',font:{size:10}},grid:{display:false}}}}
    });

    charts.distance=new Chart(document.getElementById('chart-distance'),{
        type:'bar',data:{labels:['0-2','2-5','5-10','10-20','20+'],datasets:[{data:[0,0,0,0,0],backgroundColor:'rgba(247,201,72,0.7)',borderRadius:6}]},
        options:{responsive:true,maintainAspectRatio:true,aspectRatio:2.8,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+ctx.raw+' trips'}}},scales:{y:{ticks:{color:'#888',font:{size:10},maxTicksLimit:5},grid:{color:'rgba(255,255,255,0.03)'}},x:{ticks:{color:'#888',font:{size:10}},grid:{display:false}}}}
    });
}

function updateCharts() {
    const d=filteredData;
    if(!d.length) return;
    const boroughs=['Manhattan','Brooklyn','Queens','Bronx','Staten Island'];
    const counts={}; d.forEach(t=>counts[t.pickupBorough]=(counts[t.pickupBorough]||0)+1);
    charts.borough.data.labels=boroughs;
    charts.borough.data.datasets[0].data=boroughs.map(b=>counts[b]||0);
    charts.borough.update();

    const hours=new Array(24).fill(0); d.forEach(t=>hours[t.hour]++);
    charts.time.data.datasets[0].data=hours;
    charts.time.update();

    const fares={},fc={}; d.forEach(t=>{fares[t.pickupBorough]=(fares[t.pickupBorough]||0)+t.fare;fc[t.pickupBorough]=(fc[t.pickupBorough]||0)+1;});
    charts.fare.data.labels=boroughs;
    charts.fare.data.datasets[0].data=boroughs.map(b=>fc[b]?+(fares[b]/fc[b]).toFixed(2):0);
    charts.fare.update();

    const ranges=[[0,2],[2,5],[5,10],[10,20],[20,999]];
    charts.distance.data.datasets[0].data=ranges.map(r=>d.filter(t=>t.dist>=r[0]&&t.dist<r[1]).length);
    charts.distance.update();
}

// ── MAP ──
function initMap() {
    map=L.map('map-container').setView([40.72,-73.98],11);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(map);
}
function updateMap() {
    if(!map) return;
    map.eachLayer(l=>{if(l instanceof L.CircleMarker) map.removeLayer(l);});
    const counts={}; filteredData.forEach(t=>counts[t.pu]=(counts[t.pu]||0)+1);
    const max=Math.max(...Object.values(counts),1);
    Object.entries(counts).forEach(([id,c])=>{
        const coords=COORDS[id];
        if(coords) L.circleMarker(coords,{radius:Math.max(5,(c/max)*30),fillColor:'#F7C948',color:'#080808',weight:1,fillOpacity:0.7}).addTo(map).bindPopup(`<b>${ZONES[id]?.z||'Unknown'}</b><br>Trips: ${c}`);
    });
}

// ── TABLE ──
function renderTable() {
    const tbody=document.getElementById('zones-tbody');
    const d=filteredData;
    if(!d.length){tbody.innerHTML='<tr><td colspan="6" class="loading-row">No data matching filters</td></tr>';return;}
    const zc={},zf={},zd={};
    d.forEach(t=>{zc[t.pickupZone]=(zc[t.pickupZone]||0)+1;zf[t.pickupZone]=(zf[t.pickupZone]||0)+t.fare;zd[t.pickupZone]=(zd[t.pickupZone]||0)+t.dist;});
    const sorted=Object.entries(zc).sort((a,b)=>b[1]-a[1]).slice(0,10);
    const getB=z=>{for(const[id,v]of Object.entries(ZONES))if(v.z===z)return v.b;return'Unknown';};
    tbody.innerHTML=sorted.map(([z,c],i)=>`<tr><td><span class="rank-badge">${i+1}</span></td><td>${z}</td><td>${getB(z)}</td><td>${c.toLocaleString()}</td><td>$${(zf[z]/c).toFixed(2)}</td><td>${(zd[z]/c).toFixed(2)} mi</td></tr>`).join('');
}

