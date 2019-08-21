from django.shortcuts import render
from .models import MapInfo
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from main.models import CarInfo
import time

@csrf_exempt
def refresh(request):
    #차량위치정보 변경
    aa = request.POST['target_x']
    bb = request.POST['target_y']
    carin = CarInfo.objects.get(id=request.POST['car_number'])
    soon = ''
    park = carin.car_route.split(']')
    park2 = [[0 for x in range(len(park)-1)] for y in range(len(park)-1)]
    for x in range(len(park)-1):
        park2[x] = park[x].split('a')

    #맵 변경
    mapin = MapInfo.objects.get(id=1)
    kim = mapin.map.split('s')
    kim2 = [[0 for x in range(14)] for y in range(14)]
    for x in range(14):
        kim2[x] = kim[x].split(', ')
    for x in range(len(park)-1):
        kim2[int(park2[x][0])][int(park2[x][1])] = '0'
    for x in range(14):
        for y in range(14):
            soon += str(kim2[x][y])
            if y != 13:
                soon += ', '
        soon += 's'
    mapin.map = soon
    mapin.save()
    carin.now_x = aa
    carin.now_y = bb
    carin.target_x = ''
    carin.target_y = ''
    carin.car_route = '1'
    carin.car_code = '1'
    carin.save()
    return HttpResponse('')

@csrf_exempt
def reset_xy(request):
    #차넘버, 출발,도착좌표 받아오기
    id = request.POST['car_number']
    xxxx = request.POST['xxx']
    yyyy = request.POST['yyy']
    aaaa = request.POST['aaa']
    bbbb = request.POST['bbb']
    soon = ''

    #맵 2차원 배열로 쪼갬
    db_map = MapInfo.objects.get(id='1')
    kim = db_map.map.split('s')
    kim2 = [[0 for x in range(14)] for y in range(14)]
    for x in range(14):
        kim2[x] = kim[x].split(', ')

    #출발, 도착 좌표 초기화
    kim2[int(xxxx)][int(yyyy)] = '0'
    kim2[int(aaaa)][int(bbbb)] = '0'

    #CarInfo의 route값으로 경로 초기화
    carin = CarInfo.objects.get(id=id)
    park = carin.car_route.split(']')
    park3 = len(park) - 1
    park2 = [[0 for x in range(park3)] for y in range(park3)]
    for x in range(park3):
        park2[x] = park[x].split('a')
    for x in range(park3):
        kim2[int(park2[x][0])][int(park2[x][1])] = '0'

    #초기화 후 맵 수정, 저장
    for x in range(14):
        for y in range(14):
            soon += str(kim2[x][y])
            if y != 13:
                soon += ', '
        soon += 's'
    db_map.map = soon
    db_map.save()

    #도착점, 출발점, 경로 초기화
    carin.now_x = '1'
    carin.now_y = '1'
    carin.target_x = ''
    carin.target_y = ''
    carin.car_route = '1'
    carin.car_speed = ''
    carin.car_arrive_time = ''
    carin.car_now_situation = ''
    carin.car_destination_distance = ''
    carin.save()
    return HttpResponse('')

@csrf_exempt
def reset_xy2(request):
    carin = CarInfo.objects.get(id=request.POST['car_number'])
    carin.now_x = '1'
    carin.now_y = '1'
    carin.save
    return HttpResponse('')

@csrf_exempt
def bfs(request):
    print(time.time())
    db_map = MapInfo.objects.get(id='1') #알고리즘용
    mapin = MapInfo.objects.get(id='1') #저장용
    id = request.POST['car_number']
    carin = CarInfo.objects.get(id=id)
    xxxx = request.POST['xxx']
    yyyy = request.POST['yyy']
    aaaa = request.POST['aaa']
    bbbb = request.POST['bbb']
    views_map = ''
    views_route = ''

    #알고리즘 적용할 map
    park = db_map.map.split('s')
    park2 = [[0 for x in range(14)] for y in range(14)]
    for x in range(14):
        park2[x] = park[x].split(', ')
    for x in range(14):
        for y in range(14):
            park2[x][y] = int(park2[x][y])
            if park2[x][y] == 8:
                park2[x][y] = 1
            if park2[x][y] == 2:
                park2[x][y] = 1

    #db에 저장할 map
    kim = db_map.map.split('s')
    kim2 = [[0 for x in range(14)] for y in range(14)]
    for x in range(14):
        kim2[x] = kim[x].split(', ')

    start1 = int(xxxx)
    start2 = int(yyyy)
    destination1 = int(aaaa)
    destination2 = int(bbbb)
    park2[destination1][destination2] = 0

    map_time = [[0 for x in range(14)] for y in range(14)]
    map = [park2, map_time]

    # #최단거리+시간 알고리즘
    # visit = [[0] * 14 for _ in range(14)]
    # queue = []
    # path = []
    # path_real = []
    # dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    # queue.append([start1, start2])
    # while queue:
    #     node = queue.pop(0)
    #     if node == [destination1, destination2]:
    #         path.reverse()
    #         temp = path[0][0]
    #         path_real.append(path[0][1])
    #         for i in range(len(path)):
    #             if path[i][1] == temp:
    #                 path_real.append(path[i][1])
    #                 temp = path[i][0]
    #         path_real.append([start1, start2])
    #         path_real.reverse()
    #     x = node[0]
    #     y = node[1]
    #     visit[x][y] = 1
    #     for i in range(4):
    #         wx = x + dir[i][0]
    #         wy = y + dir[i][1]
    #         if visit[wx][wy] == 0 and park2[wx][wy] == 0:
    #             visit[wx][wy] = 1
    #             queue.append([wx, wy])
    #             path.append([node, [wx, wy]])

    # 맵의 가로세로. 맵 수정 시 변경
    visit = [[0] * 14 for _ in range(14)]
    queue = []
    path = []
    path_real = []
    dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    queue.append([start1, start2])
    while queue:
        node = queue.pop(0)
        x = node[0]
        y = node[1]
        visit[x][y] = 1
        time_now = int(time.time())
        for i in range(4):
            wx = x + dir[i][0]
            wy = y + dir[i][1]
            if visit[wx][wy] == 0 and (map[0][wx][wy] != 1 and map[0][wx][wy] != 2) and map[1][wx][wy] < time_now:
                visit[wx][wy] = 1
                queue.append([wx, wy])
                # 부모노드, 현재위치
                path.append([node, [wx, wy]])
                if [wx, wy] == [destination1, destination2]:

                    path.reverse()
                    temp = path[0][0]
                    path_real.append(path[0][1])
                    for i in range(len(path)):
                        if path[i][1] == temp:
                            path_real.append(path[i][1])
                            temp = path[i][0]
                    path_real.append([start1, start2])
                    path_real.reverse()
                    # print(path_real)
                    for j in range(len(path_real)):
                        # 시간 추가하기 한 칸을 일단 3초로 설정
                        map[1][path_real[j][0]][path_real[j][1]] = time_now + (0.1 * j)

                    queue.clear()
                    break
    for x in range(2):
        for y in range(14):
                print(map[x][y])
    print(path_real)
    # #pi로 전송하기 위한 데이터 가공
    value = ''
    path1 = len(path_real)
    value2 = [[0 for x in range(path1)] for y in range(path1)]
    for idx, val in enumerate(path_real):
        value += str(val[0])
        value += ', '
        value += str(val[1])
        value += ']'
    value1 = value.split(']')
    for x in range(path1):
        value2[x] = value1[x].split(', ')

    for x in range(path1):
        for y in range(2):
            value2[x][y] = int(value2[x][y])
    # # #pi로 전송할 데이터 뽑아내기
    index = 0
    code = ''
    position = '3'
    try:
        while True:
            if value2[index + 2][0] == value2[index][0] + 1:
                if value2[index + 2][1] == value2[index][1] + 1:
                    if value2[index + 1][0] == value2[index][0]:
                        print('우회전')
                        index += 2
                        code += '2 '
                        position = '4'
                        continue
                    elif value2[index + 1][1] == value2[index][1]:
                        print('좌회전')
                        index += 2
                        code += '3 '
                        position = '3'
                        continue
            elif value2[index + 2][0] == value2[index][0] - 1:
                if value2[index + 2][1] == value2[index][1] - 1:
                    if value2[index][0] == value2[index + 1][0]:
                        print('우회전')
                        index += 2
                        code += '2 '
                        position = '1'
                        continue
                    elif value2[index][1] == value2[index + 1][1]:
                        print('좌회전')
                        index += 2
                        code += '3 '
                        position = '2'
                        continue
            elif value2[index + 2][0] == value2[index][0] - 1:
                if value2[index + 2][1] == value2[index][1] + 1:
                    if value2[index][1] == value2[index + 1][1]:
                        print('우회전')
                        index += 2
                        code += '2 '
                        position = '3'
                        continue
                    elif value2[index][0] == value2[index + 1][0]:
                        print('좌회전')
                        index += 2
                        code += '3 '
                        position = '1'
                        continue
            elif value2[index + 2][0] == value2[index][0] + 1:
                if value2[index + 2][1] == value2[index][1] - 1:
                    if value2[index][1] == value2[index + 1][1]:
                        print('우회전')
                        index += 2
                        code += '2 '
                        position = '4'
                        continue
                    elif value2[index][0] == value2[index + 1][0]:
                        print('좌회전')
                        index += 2
                        code += '3 '
                        position = '2'
                        continue
            elif value2[index][0] == value2[index + 1][0]:
                if value2[index][1] > value2[index + 1][1]:
                    print('전진')
                    code += '1 '
                    index += 1
                    continue
                elif value2[index][1] < value2[index + 1][1]:
                    print('전진')
                    code += '1 '
                    index += 1
                    continue
            elif value2[index][1] == value2[index + 1][1]:
                if value2[index + 1][0] > value2[index][0]:
                    print('전진')
                    code += '1 '
                    index += 1
                    continue
                elif value2[index][0] > value2[index + 1][0]:
                    print('전진')
                    code += '1 '
                    index += 1
                    continue
            index += 1
    except IndexError:
        pass
    code += '1 '
    #경로저장
    idx = 0
    try:
        while True:
            if path_real[idx][0] == path_real[idx + 1][0]:
                if path_real[idx][1] + 1 == path_real[idx + 1][1]:
                    kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                    idx += 1
                elif path_real[idx][1] - 1 == path_real[idx + 1][1]:
                    kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                    idx += 1
            if path_real[idx][1] == path_real[idx + 1][1]:
                if path_real[idx][0] + 1 == path_real[idx + 1][0]:
                    kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                    idx += 1
                elif path_real[idx][0] - 1 == path_real[idx + 1][0]:
                    kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                    idx += 1
            if path_real[idx][0] + 1 == path_real[idx + 2][0]:
                if path_real[idx][1] + 1 == path_real[idx + 2][1]:
                    if path_real[idx][0] == path_real[idx + 1][0]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '43'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '42'
                        idx += 3
                    elif path_real[idx][1] == path_real[idx + 1][1]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '44'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '41'
                        idx += 3
            if path_real[idx][0] - 1 == path_real[idx + 2][0]:
                if path_real[idx][1] + 1 == path_real[idx + 2][1]:
                    if path_real[idx][1] == path_real[idx + 1][1]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '45'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '41'
                        idx += 3
                    elif path_real[idx][0] == path_real[idx + 1][0]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '46'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '42'
                        idx += 3
            if path_real[idx][0] - 1 == path_real[idx + 2][0]:
                if path_real[idx][1] - 1 == path_real[idx + 2][1]:
                    if path_real[idx][1] == path_real[idx + 1][1]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '43'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '41'
                        idx += 3
                    elif path_real[idx][0] == path_real[idx + 1][0]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '44'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '42'
                        idx += 3
            if path_real[idx][0] + 1 == path_real[idx + 2][0]:
                if path_real[idx][1] - 1 == path_real[idx + 2][1]:
                    if path_real[idx][1] == path_real[idx + 1][1]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '42'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '46'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '41'
                        idx += 3
                    elif path_real[idx][0] == path_real[idx + 1][0]:
                        kim2[path_real[idx][0]][path_real[idx][1]] = '41'
                        kim2[path_real[idx + 1][0]][path_real[idx + 1][1]] = '45'
                        kim2[path_real[idx + 2][0]][path_real[idx + 2][1]] = '42'
                        idx += 3
    except IndexError:
        pass
    for idx, val in enumerate(path_real):
        views_route += str(val[0])
        views_route += 'a'
        views_route += str(val[1])
        views_route += ']'
    #맵 저장
    for x in range(14):
        for y in range(14):
            views_map += str(kim2[x][y])
            if y != 13:
                views_map += ', '
        views_map += 's'
    mapin.map = views_map
    mapin.save()
    carin.position = position
    carin.target_x = aaaa
    carin.target_y = bbbb
    carin.car_route = views_route
    carin.car_speed = '30km/h'
    carin.car_code = code
    carin.car_arrive_time = '12분후'
    carin.car_now_situation = '직진'
    carin.car_destination_distance = '10km'
    carin.save()
    return HttpResponse('')