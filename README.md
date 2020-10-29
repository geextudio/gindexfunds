# Gindexfunds

指数基金投资的数据分析与指南

## 技术栈

* 界面
    * Angular
        * PWA
* 服务与后台数据
    * Python
        * Django

## 环境

* Linux / macOS
    ```bash
    # setup python3 virtual environment in Linux / macOS
    python3 -m venv gindexfund.venv
    # activate virtual to work
    source ./gindexfund.venv/bin/activate
    # upgrade the package manager tool pip
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip --upgrade
    # intall libs
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
    # enter the service project root
    cd gindexfundservice/ 
    ```
* Windows
    ```bash
    # setup python3 virtual environment in Windows
    python -m venv gindexfund.venv
    # activate virtual to work
    .\gindexfund.venv\Script\activate
    # upgrade the package manager tool pip
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip --upgrade
    # intall libs
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
    # enter the service project root
    cd gindexfundservice/
    ```