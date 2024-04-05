import json

def define_env(env):
    """
    This is the hook for the functions (new form)
    """
    version = "LATEST"
    try:
        with open("../package.json") as fh:
            version = json.loads(fh.read())["version"]
    except:
        pass

    @env.macro
    def rwp_version():
        "get the version"
        return version

