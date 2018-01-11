function createRuleArray(numRegra) {
	// Cria layout do array. O parametro "map" é fixo, mas o valor de "val" depende de cada regra
	// Cada pedaço do map, corresponde a um valor, verdadeiro ou falso
	const pattern = {
		map: [[1,1,1], [1,1,0], [1,0,1], [1,0,0], [0,1,1], [0,1,0], [0,0,1], [0,0,0]],
		val: []
	} 
	const val = numRegra
	const valMap = val.map(function (x) {
		if (x === 1) { return true } else { return false }
	})
	let valArray = []
	createMapping(valArray, valMap)
	function createMapping(master, value) {
		for (let i = 0; i < value.length; i++) {
			let uniqArray = []
			uniqArray[0] = value[i]
			master.push(uniqArray)		 
		}
	}
	pattern.val = valArray 
	function resultado(rule) { 
		let result = []
		for (let i = 0; i < rule.map.length; i++) {
			let miniArray = []
			// console.log('mapa:', rule.map[i])
			// console.log('resultado:', rule.val[i][0])
			miniArray.push(rule.map[i])
			miniArray.push(rule.val[i][0])
			result.push(miniArray)
		}
		return result
	}
	return resultado(pattern); 
}


const kek = [0, 0, 1, 1, 0, 0, 1, 0]
const kekObj = createRuleArray(kek)

console.log('resultado', kekObj)

/*function resultado(rule) { 
	for (let i = 0; i < rule.map.length; i++) {
		console.log('mapa:', rule.map[i])
		console.log('resultado:', rule.val[i][0])
	}
}
resultado(pattern);*/