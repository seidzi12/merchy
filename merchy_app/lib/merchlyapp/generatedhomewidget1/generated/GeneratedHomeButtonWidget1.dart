import 'package:flutter/material.dart';
import 'package:flutterapp/merchlyapp/generatedhomewidget1/generated/GeneratedHomeWidget2.dart';
import 'package:flutterapp/helpers/transform/transform.dart';
import 'package:flutterapp/merchlyapp/generatedhomewidget1/generated/GeneratedIconWidget6.dart';

/* Group Home Button
    Autogenerated by FlutLab FTF Generator
  */
class GeneratedHomeButtonWidget1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 28.0,
      height: 34.0,
      child: Stack(
          fit: StackFit.expand,
          alignment: Alignment.center,
          overflow: Overflow.visible,
          children: [
            Positioned(
              left: 0.0,
              top: null,
              right: 0.0,
              bottom: 12.0,
              width: null,
              height: 22.0,
              child: LayoutBuilder(
                  builder: (BuildContext context, BoxConstraints constraints) {
                double percentWidth = 0.7857142857142857;
                double scaleX = (constraints.maxWidth * percentWidth) / 22.0;

                return Stack(children: [
                  TransformHelper.translateAndScale(
                      translateX: constraints.maxWidth * 0.10714285714285714,
                      translateY: 0,
                      translateZ: 0,
                      scaleX: scaleX,
                      scaleY: 1,
                      scaleZ: 1,
                      child: GeneratedIconWidget6())
                ]);
              }),
            ),
            Positioned(
              left: null,
              top: null,
              right: null,
              bottom: -5.0,
              width: 33.0,
              height: 17.0,
              child: TransformHelper.translate(
                  x: 2.50, y: 0.00, z: 0, child: GeneratedHomeWidget2()),
            )
          ]),
    );
  }
}
