<?php
require __DIR__ . './vendor/autoload.php';
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md
//当前时间戳
$ak = 'LTAI4FcyhLT5Hhkz1WsrRdq9';
$sk = 'iCyqPU5pbtumGvSz2EsoF9GeRAXFNL';
$endTime = strtotime(date("Y-m-d H:i:s",intval(time())))*1000;
$startTime =strtotime(date("Y-m-d H:i:s",intval(time())))*1000-86400000+28800000;
AlibabaCloud::accessKeyClient('LTAIPV9yGTJCJf75', 'gkUU7cuevoppmxmq3Nd2oeXm6wtXEb')
                        ->regionId('cn-shanghai')
                        ->asDefaultClient();                        
try {
    $result1 = AlibabaCloud::rpc()
                          ->product('Iot')
                          ->version('2018-01-20')
                          ->action('QueryDevicePropertiesData')
                          ->method('POST')
                          ->host('iot.cn-shanghai.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "cn-shanghai",
                                          'DeviceName' => "device1",
                                          'StartTime' => $startTime,
                                          'EndTime' => $endTime,
                                          'Asc' => "1",
                                          'PageSize' => "100",
                                          'Identifier.1' => "Temperature",
                                          'Identifier.2' => "Humidity",
                                          'Identifier.3' => "voltage",
                                          'Identifier.4' => "Pm2_5",
                                          'Identifier.5' => "Pm10",
                                          'ProductKey' => "a1cFMv3gonz",
                                        ],
                                    ])
                          ->request();
    $result2 = AlibabaCloud::rpc()
                          ->product('Iot')
                          ->version('2018-01-20')
                          ->action('QueryDevicePropertiesData')
                          ->method('POST')
                          ->host('iot.cn-shanghai.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "cn-shanghai",
                                          'DeviceName' => "device2",
                                          'StartTime' => $startTime,
                                          'EndTime' => $endTime,
                                          'Asc' => "1",
                                          'PageSize' => "100",
                                          'Identifier.1' => "Temperature",
                                          'Identifier.2' => "Humidity",
                                          'Identifier.3' => "voltage",
                                          'Identifier.4' => "Pm2_5",
                                          'Identifier.5' => "Pm10",
                                          'ProductKey' => "a1cFMv3gonz",
                                        ],
                                    ])
                          ->request();
     $result3 = AlibabaCloud::rpc()
                          ->product('Iot')
                          ->version('2018-01-20')
                          ->action('QueryDevicePropertiesData')
                          ->method('POST')
                          ->host('iot.cn-shanghai.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "cn-shanghai",
                                          'DeviceName' => "device3",
                                          'StartTime' => $startTime,
                                          'EndTime' => $endTime,
                                          'Asc' => "1",
                                          'PageSize' => "100",
                                          'Identifier.1' => "Temperature",
                                          'Identifier.2' => "Humidity",
                                          'Identifier.3' => "voltage",
                                          'Identifier.4' => "Pm2_5",
                                          'Identifier.5' => "Pm10",
                                          'ProductKey' => "a1cFMv3gonz",
                                        ],
                                    ])
                          ->request();
    $result4 = AlibabaCloud::rpc()
                          ->product('Iot')
                          ->version('2018-01-20')
                          ->action('QueryDevicePropertiesData')
                          ->method('POST')
                          ->host('iot.cn-shanghai.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "cn-shanghai",
                                          'DeviceName' => "device4",
                                          'StartTime' => $startTime,
                                          'EndTime' => $endTime,
                                          'Asc' => "1",
                                          'PageSize' => "100",
                                          'Identifier.1' => "Temperature",
                                          'Identifier.2' => "Humidity",
                                          'Identifier.3' => "voltage",
                                          'Identifier.4' => "Pm2_5",
                                          'Identifier.5' => "Pm10",
                                          'ProductKey' => "a1cFMv3gonz",
                                        ],
                                    ])
                          ->request();
    $result5 = AlibabaCloud::rpc()
                          ->product('Iot')
                          ->version('2018-01-20')
                          ->action('QueryDevicePropertiesData')
                          ->method('POST')
                          ->host('iot.cn-shanghai.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "cn-shanghai",
                                          'DeviceName' => "device5",
                                          'StartTime' => $startTime,
                                          'EndTime' => $endTime,
                                          'Asc' => "1",
                                          'PageSize' => "100",
                                          'Identifier.1' => "Temperature",
                                          'Identifier.2' => "Humidity",
                                          'Identifier.3' => "voltage",
                                          'Identifier.4' => "Pm2_5",
                                          'Identifier.5' => "Pm10",
                                          'ProductKey' => "a1cFMv3gonz",
                                        ],
                                    ])
                          ->request();
    print_r($result1->toJson());
    echo "|";
    print_r($result2->toJson());
    echo "|";
    print_r($result3->toJson());
    echo "|";
    print_r($result4->toJson());
    echo "|";
    print_r($result5->toJson());
    echo "|";
    echo $startTime;
} catch (ClientException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
}
