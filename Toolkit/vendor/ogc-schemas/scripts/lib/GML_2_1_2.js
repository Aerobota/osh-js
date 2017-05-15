var GML_2_1_2_Module_Factory = function () {
  var GML_2_1_2 = {
    n: 'GML_2_1_2',
    dens: 'http:\/\/www.opengis.net\/gml',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'GeometryAssociationType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiLineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LinearRingMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PointMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LinearRingType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 4,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'AbstractGeometryType',
        ps: [{
            n: 'gid',
            ti: 'ID',
            an: {
              lp: 'gid'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundingShapeType',
        ps: [{
            n: 'box',
            rq: true,
            en: 'Box',
            ti: '.BoxType'
          }, {
            n: '_null',
            rq: true,
            en: 'null'
          }]
      }, {
        ln: 'MultiLineStringType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'MultiPolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LineStringMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'FeatureAssociationType',
        ps: [{
            n: 'feature',
            rq: true,
            mx: false,
            dom: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiPointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'AbstractFeatureType',
        ps: [{
            n: 'description'
          }, {
            n: 'name'
          }, {
            n: 'boundedBy',
            ti: '.BoundingShapeType'
          }, {
            n: 'fid',
            ti: 'ID',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiGeometryPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LineStringType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 2,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'GeometryCollectionType',
        bti: '.AbstractGeometryCollectionBaseType',
        ps: [{
            n: 'geometryMember',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            ti: '.GeometryAssociationType',
            t: 'er'
          }]
      }, {
        ln: 'PolygonMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'BoxType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'AbstractFeatureCollectionBaseType',
        bti: '.AbstractFeatureType'
      }, {
        ln: 'MultiPointType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'CoordType',
        ps: [{
            n: 'x',
            rq: true,
            en: 'X',
            ti: 'Decimal'
          }, {
            n: 'y',
            en: 'Y',
            ti: 'Decimal'
          }, {
            n: 'z',
            en: 'Z',
            ti: 'Decimal'
          }]
      }, {
        ln: 'PolygonType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'outerBoundaryIs',
            rq: true,
            ti: '.LinearRingMemberType'
          }, {
            n: 'innerBoundaryIs',
            mno: 0,
            col: true,
            ti: '.LinearRingMemberType'
          }]
      }, {
        ln: 'GeometryPropertyType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractGeometryCollectionBaseType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'AbstractFeatureCollectionType',
        bti: '.AbstractFeatureCollectionBaseType',
        ps: [{
            n: 'featureMember',
            mno: 0,
            col: true,
            ti: '.FeatureAssociationType'
          }]
      }, {
        ln: 'LineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiPolygonType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'PointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'CoordinatesType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'decimal',
            an: {
              lp: 'decimal'
            },
            t: 'a'
          }, {
            n: 'cs',
            an: {
              lp: 'cs'
            },
            t: 'a'
          }, {
            n: 'ts',
            an: {
              lp: 'ts'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        t: 'enum',
        ln: 'NullType',
        vs: ['inapplicable', 'unknown', 'unavailable', 'missing']
      }],
    eis: [{
        en: 'MultiLineString',
        ti: '.MultiLineStringType',
        sh: '_Geometry'
      }, {
        en: 'geometryMember',
        ti: '.GeometryAssociationType'
      }, {
        en: 'coord',
        ti: '.CoordType'
      }, {
        en: 'polygonProperty',
        ti: '.PolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'pointMember',
        ti: '.PointMemberType',
        sh: 'geometryMember'
      }, {
        en: 'MultiPoint',
        ti: '.MultiPointType',
        sh: '_Geometry'
      }, {
        en: 'LinearRing',
        ti: '.LinearRingType',
        sh: '_Geometry'
      }, {
        en: 'multiEdgeOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'multiCenterLineOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'multiPosition',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'multiPointProperty',
        ti: '.MultiPointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'multiExtentOf',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'edgeOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'Polygon',
        ti: '.PolygonType',
        sh: '_Geometry'
      }, {
        en: 'position',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: '_Geometry'
      }, {
        en: 'location',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'name'
      }, {
        en: 'centerLineOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'LineString',
        ti: '.LineStringType',
        sh: '_Geometry'
      }, {
        en: 'boundedBy',
        ti: '.BoundingShapeType'
      }, {
        en: 'extentOf',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'lineStringMember',
        ti: '.LineStringMemberType',
        sh: 'geometryMember'
      }, {
        en: 'coordinates',
        ti: '.CoordinatesType'
      }, {
        en: 'innerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'multiLocation',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: '_Geometry',
        ti: '.AbstractGeometryType'
      }, {
        en: 'multiLineStringProperty',
        ti: '.MultiLineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'multiPolygonProperty',
        ti: '.MultiPolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: '_GeometryCollection',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: 'multiCenterOf',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'pointProperty',
        ti: '.PointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'multiCoverage',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'outerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'centerOf',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: '_Feature',
        ti: '.AbstractFeatureType'
      }, {
        en: '_geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: '_FeatureCollection',
        ti: '.AbstractFeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'polygonMember',
        ti: '.PolygonMemberType',
        sh: 'geometryMember'
      }, {
        en: 'description'
      }, {
        en: 'lineStringProperty',
        ti: '.LineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'MultiPolygon',
        ti: '.MultiPolygonType',
        sh: '_Geometry'
      }, {
        en: 'featureMember',
        ti: '.FeatureAssociationType'
      }, {
        en: 'coverage',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'MultiGeometry',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: 'Box',
        ti: '.BoxType'
      }, {
        en: 'multiGeometryProperty',
        ti: '.MultiGeometryPropertyType',
        sh: '_geometryProperty'
      }]
  };
  return {
    GML_2_1_2: GML_2_1_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_2_1_2_Module_Factory);
}
else {
  var GML_2_1_2_Module = GML_2_1_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
  else {
    var GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
}