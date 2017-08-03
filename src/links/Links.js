import React, {Component} from 'react';
import _ from 'lodash'
import vis from 'vis'

class Links extends Component {

    constructor(props){
        super(props)

        this.componentDidMount.bind(this)
    }

    componentDidMount(){

        let systems = _.map(this.mainSystems(this.props.status), (s, i) => {return {id: i, label:s}});
        let offset = systems.length;
        let components = _.map(this.components(this.props.status), (s, i) => {return {id: i+offset, label:s}});

        let systemNodes = _.chain(systems)
            .map(s => {return {id: s.id, label: s.label, color: "green", value: 5}})
            .value();

        let componentNodes = _.chain(components)
            .map(s => {return {id: s.id, label: s.label, color: "red", value: 3}})
            .value();

        let allNodes = [];
        allNodes.push.apply(allNodes, systemNodes);
        allNodes.push.apply(allNodes, componentNodes);


        let index = 1;
        let allItems = _.chain(this.props.status)
            .groupBy(s => s[0].system)
            .map((s, system) => {

                let items = [];
                let sid = index++;
                let color = "green";
                if (_.some(s, item => item[1].color === "red")){
                    color = "red";
                } else if (_.some(s, item => item[1].color === "yellow")) {
                    color = "yellow";
                }
                items.push({id: sid, label:system, _type: "node", value: 7, color: color});


                let systemItems = _.chain(s)
                    .map(s => {

                        let hostItems = [];
                        let hostname = s[0].hostname;
                        let hid = index++;

                        hostItems.push({id: hid, label: hostname, value: 5, _type: "node", color: s[1].color});
                        hostItems.push({from: hid, to: sid, _type: "edge", color: "gray", dashes: [5, 5]});

                        if (s[1].components){

                            let items = _.chain(s[1].components)
                                .map(c => {
                                    let cid = index++;
                                    let name = c.name;
                                    return [
                                        {id: cid, label: name, value: 3, _type: "node", color: c.color},
                                        {from: cid, to: hid, _type: "edge", color: "gray"}
                                    ]
                                })
                                .flatten()
                                .value();

                            //hostItems.push.apply(hostItems, items);

                        }

                        return hostItems;
                    })
                    .flatten()
                    .value()

                items.push.apply(items, systemItems)
                return items;

            })
            .flatten()
            .value();


        let onlyNodes = allItems.filter(i => i._type === "node")
        let onlyEdge = allItems.filter(i => i._type === "edge")

        let systemDependencies = {
            ComponentsOnly: ["ComponentStatuses", "503WithJson"],
            ComponentStatuses: ["SystemMissingColor"],
            SystemWith404: ["SystemMissingColor"],
        }


        const labelToId = _.chain(onlyNodes)
            .reduce((obj, curr) => { obj[curr.label] = curr.id; return obj }, {})
            .value();

        let systemEdges = _.chain(systemDependencies)
            .map((toList, from) => {
                let fromId = labelToId[from];
                return _.map(toList, (to) => {
                    return {from: fromId, to: labelToId[to], color: "black", arrows: {from: {scaleFactor: 2}}}
                })
            })
            .flatten()
            .value();
        onlyEdge.push.apply(onlyEdge, systemEdges);


        console.log("systemEdges", systemEdges);

        var nodes = new vis.DataSet(onlyNodes);

        // create an array with edges
        var edges = new vis.DataSet(onlyEdge);

        let container = this.refs.output;
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            pyhsic: true,
            nodes: {
                shape: 'dot',
                scaling:{
                    label: {
                        min:8,
                        max:20
                    }
                }
            },
            edges: {
                smooth: {
                    type: 'continuous'
                }
            }

        };
        var network = new vis.Network(container, data, options);

    }

    mainSystems(status){
        return _.chain(status)
            .map(s => s[0].system)
            .uniq()
            .value()

    }

    components(status){
        return _.chain(status)
            .filter(s => s[1].components)
            .map(s => s[1].components)
            .flatten()
            .map(c => c.name)
            .uniq()
            .value()
    }

    render(){

        return <div>
            <div style={{width: 1000, height: 500, backgroundColor: "#F5F5F5"}} ref="output"></div>
        </div>


    }


}

export default Links;
