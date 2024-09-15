import 'package:flutter/material.dart';
import 'package:flutterapp/merchlyapp/generatedprogresswidget/GeneratedProgressWidget.dart';
import 'package:flutterapp/merchlyapp/generatedhomewidget1/GeneratedHomeWidget1.dart';

void main() {
  runApp(MerchlyApp());
}

class MerchlyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/GeneratedHomeWidget1',
      routes: {
        '/GeneratedProgressWidget': (context) => GeneratedProgressWidget(),
        '/GeneratedHomeWidget1': (context) => GeneratedHomeWidget1(),
      },
    );
  }
}
