(function() {
    function draw_background(nodes, links) {
        var nodeRadius = 5;

        var canvas = document.getElementById('background');
        var context = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;

        var simulation = d3.forceSimulation()
            .force('link',
                d3.forceLink()
                .id((d) => { return d.id; })
                // eslint-disable-next-line no-unused-vars
                .distance((d) => { return 1; }))
            .force('charge',
                d3.forceManyBody()
                .strength(-1000))
            .force('center',
                d3.forceCenter(0, 0));

        simulation.nodes(nodes)
                    .on('tick', ticked);

        simulation.force('link')
                    .links(links);


        function ticked() {
            context.clearRect(0, 0, width, height);
            context.save();
            context.translate(width/2, height/2);

            // Draw links
            context.beginPath();
            _.forEach(links, (link) => {
                drawLink(link);
            });
            context.strokeStyle = '#AAA';
            context.stroke();

            // Draw nodes
            context.beginPath();
            _.forEach(nodes, (node) => {
                drawNode(node);
            });
            context.fillStyle = '#AAA';
            context.fill();

            context.restore();
        }

        function drawLink(d) {
            context.moveTo(d.source.x, d.source.y);
            context.lineTo(d.target.x, d.target.y);
        }

        function drawNode(d) {
            if (d.x>width/2) d.x = width/2;
            if (d.x<-width/2) d.x = -width/2;
            if (d.y>height/2) d.y = height/2;
            if (d.y<-height/2) d.y = -height/2;
            context.moveTo(d.x, d.y);
            context.arc(d.x, d.y, nodeRadius, 0, 2*Math.PI);
        }
    }

    function generate_nodes(n) {
        const nodes = [];

        for (let i=0; i<n; i++) {
            nodes.push({'id': i.toString()});
        }

        return nodes;
    }

    function create_links(nodes) {
        const links = [];

        for (let i=0; i<5*_.size(nodes); i++) {
            const source = _.get(_.sample(nodes), 'id');
            const target = _.get(_.sample(nodes), 'id');

            if (source!==target) {
                links.push({
                    'source': source.toString(),
                    'target': target.toString()
                });
            }
        }

        return links;
    }

    $(document).ready(() => {
        const width = $('body').width();
        const height = $('body').height();

        $('body').append('<canvas id="background"></canvas>');
        $('#background').attr('width', 0.98*width);
        $('#background').attr('height', 0.98*height);

        const nodes = generate_nodes(250);
        const links = create_links(nodes);
        draw_background(nodes, links);
    });
})();
