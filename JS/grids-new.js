var gridsRaw = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"properties": {
			"businesses": 0,
			"total": 28,
			"noise": 22,
			"establishment": 6,
			"poisoning": 0,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 0
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24880843964634, 40.51409349165659],
					[-74.24999775460113, 40.515659766927676],
					[-74.2523763845107, 40.515659766927676],
					[-74.25356569946548, 40.51409349165659],
					[-74.2523763845107, 40.5125272163855],
					[-74.24999775460113, 40.5125272163855],
					[-74.24880843964634, 40.51409349165659]
				]
			]
		}
	},, {
		"type": "Feature",
		"properties": {
			"businesses": 1,
			"total": 1,
			"noise": 0,
			"establishment": 1,
			"poisoning": 0,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 1
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24524049478198, 40.50939466584333],
					[-74.24642980973677, 40.51096094111442],
					[-74.24880843964634, 40.51096094111442],
					[-74.24999775460113, 40.50939466584333],
					[-74.24880843964634, 40.50782839057224],
					[-74.24642980973677, 40.50782839057224],
					[-74.24524049478198, 40.50939466584333]
                    
				]
			]
		}
	}, {
		"type": "Feature",
		"properties": {
			"businesses": 0,
			"total": 4,
			"noise": 1,
			"establishment": 3,
			"poisoning": 0,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 2
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24524049478198, 40.5125272163855],
					[-74.24642980973677, 40.51409349165659],
					[-74.24880843964634, 40.51409349165659],
					[-74.24999775460113, 40.5125272163855],
					[-74.24880843964634, 40.51096094111441],
					[-74.24642980973677, 40.51096094111441],
					[-74.24524049478198, 40.5125272163855]
				]
			]
		}
	}, {
		"type": "Feature",
		"properties": {
			"businesses": 0,
			"total": 58,
			"noise": 57,
			"establishment": 0,
			"poisoning": 0,
			"drinking": 1,
			"smoking": 0,
			"others": 0,
			"index": 3
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24524049478198, 40.51565976692767],
					[-74.24642980973677, 40.51722604219876],
					[-74.24880843964634, 40.51722604219876],
					[-74.24999775460113, 40.51565976692767],
					[-74.24880843964634, 40.51409349165658],
					[-74.24642980973677, 40.51409349165658],
					[-74.24524049478198, 40.51565976692767]
				]
			]
		}
	}, {
		"type": "Feature",
		"properties": {
			"businesses": 0,
			"total": 1,
			"noise": 0,
			"establishment": 1,
			"poisoning": 0,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 4
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24167254991761, 40.50469584003008],
					[-74.2428618648724, 40.50626211530117],
					[-74.24524049478197, 40.50626211530117],
					[-74.24642980973675, 40.50469584003008],
					[-74.24524049478197, 40.50312956475899],
					[-74.2428618648724, 40.50312956475899],
					[-74.24167254991761, 40.50469584003008]
				]
			]
		}
	}, {
		"type": "Feature",
		"properties": {
			"businesses": 1,
			"total": 8,
			"noise": 4,
			"establishment": 3,
			"poisoning": 1,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 5
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24167254991761, 40.51096094111442],
					[-74.2428618648724, 40.51252721638551],
					[-74.24524049478197, 40.51252721638551],
					[-74.24642980973675, 40.51096094111442],
					[-74.24524049478197, 40.50939466584333],
					[-74.2428618648724, 40.50939466584333],
					[-74.24167254991761, 40.51096094111442]
				]
			]
		}
	}, {
		"type": "Feature",
		"properties": {
			"businesses": 0,
			"total": 3,
			"noise": 2,
			"establishment": 1,
			"poisoning": 0,
			"drinking": 0,
			"smoking": 0,
			"others": 0,
			"index": 6
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[-74.24167254991761, 40.51722604219876],
					[-74.2428618648724, 40.518792317469845],
					[-74.24524049478197, 40.518792317469845],
					[-74.24642980973675, 40.51722604219876],
					[-74.24524049478197, 40.51565976692767],
					[-74.2428618648724, 40.51565976692767],
					[-74.24167254991761, 40.51722604219876]
				]
			]
		}
	}]
}

var types = {
	"noise": {
		"values": ["Noise - Commercial"],
		"count": 20813,
		"max": 278
	},
	"establishment": {
		"values": ["Food Establishment"],
		"count": 8354,
		"max": 60
	},
	"poisoning": {
		"values": ["Food Poisoning"],
		"count": 2433,
		"max": 15
	},
	"drinking": {
		"values": ["Drinking"],
		"count": 453,
		"max": 8
	},
	"smoking": {
		"values": ["Smoking"],
		"count": 310,
		"max": 10
	},
	"others": {
		"values": ["Bottled Water", "Calorie Labeling", "Indoor Air Quality", "Urinating in Public"],
		"count": 121,
		"max": 9
	}
};