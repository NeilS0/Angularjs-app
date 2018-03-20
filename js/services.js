
//author: Neil Steyn

//NOTE: a factory in angular is a service
// there are 3 types: provider, factory and service

//add some services that our controllers wil use
angular.module("theplantguru")
	.factory("plantList", function(){

		//return array of objects which contain our data, 
		//NOTE: this is suppose to come from a DB

		return [{"id": 0, "name": "Agapanthus", 
					"image": "assets/plant_images/Agapanthus.jpg",
					"shortDescription": "South African plant"},
					{"id": 1, "name": "Bougainvillea", 
					"image": "assets/plant_images/Bougainvillea.jpg",
					"shortDescription": "South African plant"},
					{"id": 2, "name": "Kniphofia", 
					"image": "assets/plant_images/Kniphofia.jpg",
					"shortDescription": "South African plant"},
					{"id": 3, "name": "Dietes", 
					"image": "assets/plant_images/Dietes.jpg",
					"shortDescription": "South African plant"},
					{"id": 4, "name": "Society Garlic", 
					"image": "assets/plant_images/violacea.jpg",
					"shortDescription": "South African plant"},
					{"id": 5, "name": "Grassula", 
					"image": "assets/plant_images/Crassula.jpg",
					"shortDescription": "South African plant"},
					{"id": 6, "name": "Aloe", 
					"image": "assets/plant_images/Aloearbor.jpg",
					"shortDescription": "South African plant"}
					];
	})

	//plant item info
	.service("plantItem", function(){

		var plants = [{"id": 0, "name": "Agapanthus", "image": "assets/plant_images/Agapanthus.jpg",
							"description": "Agapanthus is a very variable genus, yet they are all broadly similar in appearance, with rhizomatous roots, strap-like leaves and an umbellate inflorescence on a stalk held above the leaves. Botanists have always found it tricky to classify them into distinct species. Frances Leighton revised the genus in 1965, recognizing ten species in total: four evergreen species, viz. A. africanus, A. comptonii, A. praecox and A. walshii and six deciduous species, viz. A. campanulatus, A. caulescens, A. coddii, A. dyeri, A. inapertus and A. nutans. Zonneveld & Duncan (2003), using nuclear DNA content and pollen vitality and colour, as well as morphology, now consider A. comptonii to be identical to A. praecox subsp. minimus; A. walshii to be a subspecies of A. africanus; A. dyeri to be identical to A. inapertus subsp. intermedius; and A. nutans to be identical to A caulescens. As a result there are now only two evergreen species i.e. A. africanus and A. praecox and four deciduous species i.e. A. campanulatus, A. caulescens, A. coddii and A. inapertus, making six species in total.", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 1, "name": "Bougainvillea", "image": "assets/plant_images/Bougainvillea.jpg",
							"description": "Bougainvilleas are among the most spectacular and colourful of all climbers, with dozens of cultivars available. They come in shades of white, pink, red, orange, lilac, purple, cerise and copper; there is even one with pink and white flowers on the same plant. There are also a number of double varieties, plus some with variegated leaves. These colourful charmers are handy for a variety of functions, from covering walls and pergolas to being used as ground covers, specimen plants and tub subjects. They are very vigorous, heavy and thorny, and the stronger growers need stout support. Bougainvilleas flower best if grown in poorish soil and given little water. However, if necessary, feed with 3:1:5 (26) SR or bone meal. Although tender, they can be grown in protected spots in Highveld and Free State gardens, and are excellent in warm, dry gardens.", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 2, "name": "Kniphofia", "image": "assets/plant_images/Kniphofia.jpg",
							"description": "This species has large,long, narrow and grass-like leaves which is non-succulent. It bears tubular spikes of upright, brightly colored flowers, in shades of red, orange and yellow, often bicoloured. Borne mainly from autumn to spring. The flowers is attractive to wildlife because it produce nectar. Most species is evergreen but a few are deciduous..", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 3, "name": "Dietes", "image": "assets/plant_images/Dietes.jpg",
							"description": "Dietes flavida is a clump-forming perennial with a rhizomatous rootstock. It grows 0.5–0.7 m tall, and can reach up to 1.2 m. Leaves are narrow, lanceolate, 300–500 × 15–22 mm, glaucous.", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 4, "name": "Society Garlic", "image": "assets/plant_images/violacea.jpg",
							"description": "Tulbaghia violacea is a fast-growing, bulbous plant that reaches a heightof 0.5 m. The leaves are long, narrow, strap-like, slightly fleshy and smell strongly of garlic when bruised. They grow from fat, tuberous roots which spread to form clumps of plants. The pinkish-mauve tubular flowers, clustered into umbels of up to 20 flowers, are held above the leaves on a tall flower stalk, and appear ove a long period in summer (January to April). They too smell of garlic when picked. The fruit, triangular capsules, are grouped into a head, and when ripe they split to release the flattened, hard black seeds.", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 5, "name": "Grassula", "image": "assets/plant_images/Crassula.jpg",
							"description": "A large well-branched, compact, rounded, evergreen shrub 1 - 3 m tall with glossy, dark grey-green, oval, succulent leaves and rounded heads of pink flowers in winter-spring. The stem is stout and gnarled and gives the impression of great age, and its branches are also short and stubby but well-proportioned. Branches are succulent, grey-green in colour and in older specimens the bark peels in horizontal brownish strips.", 
							"species": "???", "family": "???", "botanical": "???"},
							{"id": 6, "name": "Aloe", "image": "assets/plant_images/Aloearbor.jpg",
							"description": "The krantz aloe is a multi-stemmed, much-branched shrub up to 3 m high (or sometimes even 5 m), with leaves in dense rosettes at the branch tips. Leaves are greyish green with yellow teeth. Inflorescences are usually simple with elongated-inverted conical, densely flowered racemes. It usually grows in pockets of rich soil on rocky outcrops in mountains in areas of high summer rainfall, but can also be found right up to the coast. The krantz aloe is very widely distributed in southeastern Africa from the Cape Peninsula, along the south and east coast of South Africa, as well as further north to Mozambique and the eastern mountains of Zimbabwe and Malawi.", 
							"species": "???", "family": "???", "botanical": "???"},

							];

		return {
						getPlantItem: function(id){
							for (var i in plants){
								if (plants[i].id == id){
									return plants[i];
								}
							}
						}
					};
	});
