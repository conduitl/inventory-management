"use strict";
exports.CATEGORIES = [
    { id: 0, name: 'all' },
    { id: 1, name: 'flowers' },
    { id: 2, name: 'shrubs' },
    { id: 3, name: 'trees' },
    { id: 4, name: 'soil' }
];
exports.DESIGNS = [
    { name: '202 N Hall', photos: ['img/nhall1.jpg', 'img/nhall2.jpg', 'img/nhall3.jpg', 'img/nhall4.jpg', 'img/nhall5.jpg'] },
    { name: '1010 Majestic Oak', photos: ['img/majestic1.jpg', 'img/majestic2.jpg', 'img/majestic3.jpg'] },
    { name: 'Del Webb', photos: ['img/delwebb1.jpg', 'img/delwebb2.jpg', 'img/delwebb3.jpg'] }
];
exports.SUPPLIERS = [
    { name: 'Buchanan\'s Native Plants', phone: '', address: '' },
    { name: 'Cornelius Nursery', phone: '', address: '' },
    { name: 'Joshua\'s Native Plants & Garden', phone: '', address: '' },
    { name: 'Another Place In Time', phone: '', address: '' },
    { name: 'Thompson + Hanson', phone: '', address: '' },
    { name: 'RCW Nurseries, Inc.', phone: '', address: '' }
];
exports.PLANTS = [
    { id: 1, name: 'cyclamen', type: 'flowers', image: 'img/cyclamen.jpg',
        description: 'Cyclamen is a genus of 23 species of perennial flowering plants in the family Primulaceae. Cyclamen species are native to Europe and the Mediterranean Basin east to Iran, with one species in Somalia. They grow from tubers and are valued for their flowers with upswept petals and variably patterned leaves. (Wikipedia)' },
    { id: 2, name: 'alyssum', type: 'flowers', image: 'img/alyssum.jpg',
        description: 'Alyssum is a genus of about 100–170 species of flowering plants in the family Brassicaceae, native to Europe, Asia, and northern Africa, with the highest species diversity in the Mediterranean region. The genus comprises annual and perennial herbaceous plants or (rarely) small shrubs, growing to 10–100 cm tall, with oblong-oval leaves and yellow or white flowers (pink to purple in a few species). (Wikipedia)' },
    { id: 3, name: 'dianthus', type: 'flowers', image: 'img/dianthus.jpg',
        description: 'Dianthus is a genus of about 300 species of flowering plants in the family Caryophyllaceae, native mainly to Europe and Asia, with a few species extending south to north Africa, and one species (D. repens) in arctic North America. Common names include carnation (D. caryophyllus), pink (D. plumarius and related species) and sweet william (D. barbatus).' },
    { id: 4, name: 'sweet william', type: 'flowers', image: 'img/sweetwilliam.jpg',
        description: 'Dianthus barbatus (Sweet William) [2] is a species of Dianthus native to southern Europe and parts of Asia which has become a popular ornamental garden plant. It is a herbaceous biennial or short-lived perennial plant growing to 13–92 cm tall, with flowers in a dense cluster of up to 30 at the top of the stems. Each flower is 2–3 cm diameter with five petals displaying serrated edges. Wild plants produce red flowers with a white base, but colours in cultivars range from white, pink, red, and purple to variegated patterns. The exact origin of its English common name is unknown but first appears in 1596 in botanist John Gerard\'s garden catalogue.' },
    { id: 5, name: 'juncus', type: 'flowers', image: 'img/juncus.jpg',
        description: 'Juncus is a genus of monocotyledonous flowering plants, commonly known as rushes. It is the largest genus in the family Juncaceae, containing around 300 species.' },
    { id: 6, name: 'kale', type: 'flowers', image: 'img/kale.jpg',
        description: 'Many varieties of kale and cabbage are grown mainly for their ornamental leaves, which are brilliant white, red, pink, lavender, blue or violet in the interior of the rosette. Ornamental kale is as edible as any other variety.[12]' },
    { id: 7, name: 'maidenhair', type: 'flowers', image: 'img/maidenhair.jpg',
        description: 'Adiantum /ˌædiˈæntəm/,[1] the maidenhair fern, is a genus of about 200 species of ferns in the Vittarioideae subfamily of the family Pteridaceae,[2] though some researchers place it in its own family, Adiantaceae. The genus name comes from Greek, meaning "not wetting", referring to the fronds\' ability to shed water without becoming wet.' },
    { id: 8, name: 'dracaena', type: 'flowers', image: 'img/dracaena.jpg',
        description: 'Dracaena (/drəˈsiːnə/,[2] derived from the romanized form of the Ancient Greekδράκαινα – drakaina, "female dragon", is a genus of about 120 species of trees andsucculent shrubs.[3] In the APG III classification system, it is placed in the familyAsparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae).[4] It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).' },
    { id: 9, name: 'creeping jenny', type: 'flowers', image: 'img/creeping-jenny.jpg',
        description: 'Lysimachia nummularia (syn. Lysimachia zawadzkii Wiesner) is a species of flowering plant in the family Primulaceae. ' },
    { id: 10, name: 'English ivy', type: 'flowers', image: 'img/english-ivy.jpg',
        description: 'Hedera helix (common ivy, English ivy, European ivy, or just ivy) is a species offlowering plant in the family Araliaceae, native to most of Europe and western Asia. A rampant, clinging evergreen vine, it is a familiar sight in gardens, waste spaces, on house walls, tree trunks and in wild areas across its native habitat. It is labeled as an invasive species in a number of areas where it has been introduced.' },
    { id: 11, name: 'tipu tree', type: 'trees', image: 'img/tipu.jpg',
        description: 'Tipuana tipu, also known as tipa,[3] rosewood and pride of Bolivia, is a South American tree. It is the only member of the genus Tipuana.[4][5] It was recently assigned to the informal monophyletic Pterocarpus clade within the Dalbergieae.[1][2]' },
    { id: 12, name: 'cathedral oak', type: 'trees', image: 'img/oak.jpg',
        description: 'Quercus virginiana, also known as the southern live oak, is a evergreen oak tree native to the southeastern United States. Though many other species are loosely called live oak, the southern live oak is particularly iconic of the Old South. Many very large and old specimen of live oak can be found today in the deep southern United States.[4]' },
    { id: 13, name: 'cottonwood', type: 'trees', image: 'img/cottonwood.jpg',
        description: 'Populus section Aigeiros is a section of three species in the genus Populus, the poplars. Like some other species in the genus Populus, they are commonly known as cottonwoods. The species are native to North America, Europe, and western Asia. The section is named for Aigeiros, East Macedonia in Greece. In the past, as many as six species were recognized, but recent trends have been to accept just three species, treating the others as subspecies of P. deltoides.' },
    { id: 14, name: 'tru-green elm', type: 'trees', image: 'img/truegreen.jpg',
        description: 'Ulmus parvifolia, commonly known as the Chinese elm[1] or lacebark elm, is a species native to eastern Asia, including China, India, Taiwan, Japan, North Korea, and Vietnam.[2] It has been described as "one of the most splendid elms, having the poise of a graceful Nothofagus".[3] The tree was introduced to the UK in 1794 by James Main, who collected in China for Gilbert Slater of Low Layton, Essex.[4][5]' },
    { id: 15, name: 'camphor', type: 'trees', image: 'img/camphor.jpg',
        description: 'Cinnamomum camphora (commonly known as camphor tree, camphorwood or camphor laurel) is a large evergreen tree that grows up to 20–30 m (66–98 ft) tall.[1] The leaves have a glossy, waxy appearance and smell of camphor when crushed. In spring, it produces bright green foliage with masses of small white flowers. It produces clusters of black, berry-like fruit around 1 cm (0.39 in) in diameter. Its pale bark is very rough and fissured vertically. Cinnamomum camphora is native to China south of the Yangtze River, Taiwan, southern Japan, Korea, and Vietnam, and has been introduced to many other countries.[1] In Japan, where the tree is called kusunoki, five camphor trees are known with a trunk circumference above 20 m, with the largest tree (Kamou no Ohkusu) reaching the circumference of 24.22 m.[2]' },
    { id: 16, name: 'shumard oak', type: 'trees', image: 'img/shumardoak.jpg',
        description: 'Quercus shumardii, the Shumard oak, spotted oak, Schneck oak, Shumard red oak, or swamp red oak, is one of the largest of the oak species in the red oak group (Quercus section Lobatae). It is closely related to Texas red oak (Quercus buckleyi), Nuttall\'s oak (Quercus texana and Chisos red oak (Quercus gravesii).' },
    { id: 17, name: 'azaleas', type: 'shrubs', image: 'img/azaleas.jpg',
        description: 'Azaleas are flowering shrubs in the genus Rhododendron, particularly the former sections Tsutsuji (evergreen) and Pentanthera (deciduous). Azaleas bloom in spring, their flowers often lasting several weeks. Shade tolerant, they prefer living near or under trees. They are part of the family Ericaceae.' },
    { id: 18, name: 'redbud', type: 'shrubs', image: 'img/redbud.jpg',
        description: 'Cercis is a genus of about 10 species in the subfamily Caesalpinioideae of the pea family Fabaceae,[2] native to warm temperate regions. It contains small deciduous trees or large shrubs commonly known as redbuds.[5] They are characterised by simple, rounded to heart-shaped leaves and pinkish-red flowers borne in the early spring on bare leafless shoots, on both branches and trunk ("cauliflory").' },
    { id: 19, name: 'foxtail', type: 'shrubs', image: 'img/foxtail.jpg',
        description: 'Asparagus aethiopicus, Sprenger\'s Asparagus, is a plant native to the Cape Provinces and the Northern Provinces of South Africa. Often used as an ornamental plant, it is considered an invasive weed in many locations. Asparagus fern and foxtail fern are common names; however, it is unrelated to true ferns.' },
    { id: 20, name: 'monrovia', type: 'shrubs', image: 'img/monrovia.jpg', description: 'monrovia' },
    { id: 21, name: 'jatropha', type: 'shrubs', image: 'img/jatropha.jpg',
        description: 'Jatropha curcas is a species of flowering plant in the spurge family, Euphorbiaceae, that is native to the American tropics, most likely Mexico and Central America. It is cultivated in tropical and subtropical regions around the world, becoming naturalized in some areas.' },
    { id: 22, name: 'gypsum', type: 'soil', image: 'img/gypsum.jpg', description: 'gypsum' },
    { id: 23, name: 'garden mix', type: 'soil', image: 'img/garden-mix.jpg', description: 'garden mix' },
    { id: 24, name: 'pine mulch', type: 'soil', image: 'img/pine-mulch.jpg', description: 'pine mulch' },
    { id: 25, name: 'bottle brush', type: 'shrubs', image: null, description: '' }
];
//# sourceMappingURL=mock-data.js.map